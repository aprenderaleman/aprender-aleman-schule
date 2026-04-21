#!/bin/bash
# Setup script for Hetzner VPS - Run once
set -e

echo "=== Updating system ==="
apt update && apt upgrade -y

echo "=== Installing Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "=== Installing PM2 ==="
npm install -g pm2

echo "=== Installing Nginx ==="
apt install -y nginx certbot python3-certbot-nginx

echo "=== Creating app directory ==="
mkdir -p /opt/schule
cd /opt/schule

echo "=== Cloning repository ==="
# Will be filled in after GitHub repo is created
# git clone <REPO_URL> .

echo "=== Setup complete ==="
echo "Node: $(node -v)"
echo "NPM: $(npm -v)"
echo "PM2: $(pm2 -v)"
echo "Nginx: $(nginx -v 2>&1)"
