#!/bin/bash

# Azure App Service deployment script
echo "Starting deployment script..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building TypeScript application..."
npm run build

# Copy static files to dist directory
echo "Copying static files..."
cp -r public dist/

echo "Deployment script completed!"