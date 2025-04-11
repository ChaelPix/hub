#!/bin/bash

# Directory containing the screenshots
DIR="screens/"

# Counter for each game to add identifier
declare -A counters

# Process each Screenshot file
find "$DIR" -name "Screenshot_*_com.*.jpg" | sort | while read -r file; do
    # Extract the base filename
    filename=$(basename "$file")
    
    # Extract the game name (everything after "com.")
    game_name=${filename#*_com.}
    
    # Increment counter for this game
    counters[$game_name]=$((${counters[$game_name]:-0} + 1))
    
    # Create new filename: game-1.jpg, game-2.jpg, etc.
    new_name="${game_name%.jpg}-${counters[$game_name]}.jpg"
    
    # Full path for new file
    new_file="$DIR/$new_name"
    
    echo "Renaming: $filename → $new_name"
    mv "$file" "$new_file"
    jpegoptim --max=60 "$new_file"
done