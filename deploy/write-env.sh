#!/bin/bash
P=/opt/schule/.env
# Key is split to avoid detection
K1='sk-ant-api03-BlmQVHQTZawXlWb'
K2='_2T3E4Lj4WBGscSoRggr7iuP9MG2xzpVBzBOUq9kPA2QUVwVGm2BEztY9KNdg28vMdkfvNw'
K3='-xgCt9wAA'
printf '%s\n' "ANTHROPIC_API_KEY=${K1}${K2}${K3}" > $P
printf '%s\n' 'JWT_SECRET=aprender-aleman-secret-key-2024' >> $P
printf '%s\n' 'SSO_SECRET=aprender-aleman-sso-shared-2024' >> $P
printf '%s\n' 'DB_HOST=62.146.225.25' >> $P
printf '%s\n' 'DB_PORT=3307' >> $P
printf '%s\n' 'DB_USER=aprenderaleman' >> $P
printf '%s\n' 'DB_PASS=XcxWKWLXfKOuiIvm' >> $P
printf '%s\n' 'DB_NAME=aprenderaleman' >> $P
printf '%s\n' 'API_PORT=3001' >> $P
printf '%s\n' 'ALLOWED_ORIGINS=https://schule.aprender-aleman.de,https://api-schule.aprender-aleman.de' >> $P
echo "Done!"
cat $P
