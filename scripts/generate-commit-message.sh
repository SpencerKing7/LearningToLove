#!/bin/bash

# Get git status
git add -A

# Check if there are changes
if git diff --cached --quiet; then
  echo "No changes to commit"
  exit 0
fi

# Get changed files
changed_files=$(git diff --cached --name-only)
num_files=$(echo "$changed_files" | wc -l | tr -d ' ')

# Get list of changed directories/components
changed_areas=$(echo "$changed_files" | grep -E '\.(tsx|ts|css|json)$' | sed 's|.*/||; s|\.[^.]*$||' | sort -u | head -5 | paste -sd ", " -)

# Determine primary change type
if echo "$changed_files" | grep -q "src/pages/"; then
  change_type="Updated pages"
elif echo "$changed_files" | grep -q "src/components/"; then
  change_type="Updated components"
elif echo "$changed_files" | grep -q "src/styles/"; then
  change_type="Updated styles"
elif echo "$changed_files" | grep -q "package.json\|vite.config"; then
  change_type="Updated configuration"
elif echo "$changed_files" | grep -q "public/"; then
  change_type="Updated assets"
else
  change_type="Updated files"
fi

# Create concise commit message
if [ $num_files -eq 1 ]; then
  filename=$(basename "$changed_files")
  commit_message="$change_type: $filename"
elif [ $num_files -le 3 ]; then
  commit_message="$change_type: $changed_areas"
else
  commit_message="$change_type across $num_files files"
fi

# Add deployment notice
commit_message="$commit_message. Deployed to GitHub Pages"

echo "$commit_message"
