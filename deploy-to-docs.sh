#!/bin/sh
# Build the Vite project
npm run build

# Remove old docs folder if it exists
rm -rf docs

# Copy new build output to docs
cp -r dist docs

echo "Build output copied to /docs. Commit and push the /docs folder to deploy." 