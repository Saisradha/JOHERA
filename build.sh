#!/bin/bash
# Build script for Render.com deployment

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Installing Node dependencies..."
npm install

echo "Building React app..."
npm run build

echo "Build complete!"

