#!/bin/bash
set -e

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo ".env file not found!"
    exit 1
fi

make clean html

# Copy docs/* to remote server
if ! command -v sshpass &> /dev/null; then
    echo "sshpass is required. Please install it."
    exit 1
fi

sshpass -p "$DEPLOY_PASSWORD" ssh -o StrictHostKeyChecking=no "$DEPLOY_USER@$DEPLOY_HOST" "mkdir -p $DEPLOY_PATH/docs"
sshpass -p "$DEPLOY_PASSWORD" scp -r build/html/* "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/docs"

echo "Deployment complete."
