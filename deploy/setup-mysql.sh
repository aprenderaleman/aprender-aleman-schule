#!/bin/bash
# ─────────────────────────────────────────────────────────────────────
# MySQL 8 setup for Hetzner VPS — run as root via SSH
# Usage:   bash setup-mysql.sh
#
# What it does (idempotent — safe to re-run):
#   1. Installs MySQL 8 server
#   2. Creates database + user with the credentials below
#   3. Configures bind-address = 0.0.0.0 (so Coolify backend can connect)
#   4. Opens firewall port 3307 only for the Coolify outbound IP
#   5. Disables root remote login (security)
# ─────────────────────────────────────────────────────────────────────

set -e

# ─── EDIT THESE ─────────────────────────────────────────────────────
DB_NAME="aprenderaleman"
DB_USER="aprenderaleman"
DB_PASSWORD="CHANGE_ME_to_a_strong_random_password"   # 24+ random chars
DB_PORT="3307"

# IP saliente de tu backend en Coolify — sacala con:
#   curl -s ifconfig.me     (corrido DENTRO del container del backend)
COOLIFY_OUTBOUND_IP=""   # e.g. "12.34.56.78"
# ────────────────────────────────────────────────────────────────────

if [ -z "$COOLIFY_OUTBOUND_IP" ]; then
  echo "WARNING: COOLIFY_OUTBOUND_IP no está seteado."
  echo "El firewall va a permitir el puerto $DB_PORT desde TODOS lados (0.0.0.0)."
  echo "Eso es inseguro para producción. Ctrl+C para abortar, Enter para continuar."
  read
fi

echo "=== Updating apt ==="
apt-get update -y

echo "=== Installing MySQL 8 ==="
DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

systemctl enable mysql
systemctl start mysql

echo "=== Configuring MySQL to listen on 0.0.0.0:$DB_PORT ==="
CONF_FILE="/etc/mysql/mysql.conf.d/mysqld.cnf"

# Set bind-address (idempotent)
if grep -qE "^bind-address" "$CONF_FILE"; then
  sed -i "s/^bind-address.*/bind-address = 0.0.0.0/" "$CONF_FILE"
else
  echo "bind-address = 0.0.0.0" >> "$CONF_FILE"
fi

# Set port (idempotent)
if grep -qE "^port" "$CONF_FILE"; then
  sed -i "s/^port.*/port = $DB_PORT/" "$CONF_FILE"
else
  echo "port = $DB_PORT" >> "$CONF_FILE"
fi

# Use UTF8MB4 by default
if ! grep -q "character-set-server" "$CONF_FILE"; then
  cat >> "$CONF_FILE" <<EOF

# UTF-8 (full Unicode incl. emoji)
character-set-server = utf8mb4
collation-server     = utf8mb4_unicode_ci
EOF
fi

systemctl restart mysql

echo "=== Creating database + user (idempotent) ==="
mysql -e "CREATE DATABASE IF NOT EXISTS \`$DB_NAME\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -e "CREATE USER IF NOT EXISTS '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD';"
mysql -e "ALTER USER '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD';"   # rotates pw if changed
mysql -e "GRANT ALL PRIVILEGES ON \`$DB_NAME\`.* TO '$DB_USER'@'%';"
mysql -e "FLUSH PRIVILEGES;"

echo "=== Locking down MySQL root (no remote root login) ==="
mysql -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');" || true
mysql -e "DELETE FROM mysql.user WHERE User='';" || true
mysql -e "DROP DATABASE IF EXISTS test;" || true
mysql -e "FLUSH PRIVILEGES;"

echo "=== Configuring firewall (UFW) ==="
if ! command -v ufw >/dev/null 2>&1; then
  apt-get install -y ufw
fi

ufw --force enable
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH

if [ -n "$COOLIFY_OUTBOUND_IP" ]; then
  ufw allow from "$COOLIFY_OUTBOUND_IP" to any port "$DB_PORT" proto tcp comment "MySQL from Coolify"
  echo "Firewall: only $COOLIFY_OUTBOUND_IP can reach port $DB_PORT"
else
  ufw allow "$DB_PORT/tcp" comment "MySQL — open to all (CHANGE THIS)"
  echo "Firewall: port $DB_PORT open to ALL — restrict ASAP"
fi

ufw reload

echo ""
echo "=========================================="
echo "✓ MySQL listo en $(curl -s ifconfig.me):$DB_PORT"
echo "=========================================="
echo ""
echo "Conectate desde Coolify con estas variables:"
echo "  DB_HOST = $(curl -s ifconfig.me)"
echo "  DB_PORT = $DB_PORT"
echo "  DB_USER = $DB_USER"
echo "  DB_PASS = $DB_PASSWORD"
echo "  DB_NAME = $DB_NAME"
echo ""
echo "Test rápido desde tu máquina:"
echo "  mysql -h $(curl -s ifconfig.me) -P $DB_PORT -u $DB_USER -p$DB_PASSWORD -e 'SELECT 1' $DB_NAME"
echo ""
