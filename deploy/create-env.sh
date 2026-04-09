#!/bin/bash
# Run this on the VPS to create the .env file
# Replace PLACEHOLDER values before running
echo "ANTHROPIC_API_KEY=$1" > /opt/schule/.env
echo 'JWT_SECRET=aprender-aleman-secret-key-2024' >> /opt/schule/.env
echo 'SSO_SECRET=aprender-aleman-sso-shared-2024' >> /opt/schule/.env
echo 'DB_HOST=62.146.225.25' >> /opt/schule/.env
echo 'DB_PORT=3307' >> /opt/schule/.env
echo 'DB_USER=aprenderaleman' >> /opt/schule/.env
echo 'DB_PASS=XcxWKWLXfKOuiIvm' >> /opt/schule/.env
echo 'DB_NAME=aprenderaleman' >> /opt/schule/.env
echo 'API_PORT=3001' >> /opt/schule/.env
echo 'ALLOWED_ORIGINS=https://schule.aprender-aleman.de,https://api-schule.aprender-aleman.de' >> /opt/schule/.env
echo "Done! .env created:"
cat /opt/schule/.env
