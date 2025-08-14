#!/bin/bash

gifs=(
  "screen_laddersandsnakes.gif"
  "screen_destrucubes.gif"
  "screen_stickyball.gif"
  "screen_eatingblobcrush.gif"
  "screen_balancemaster.gif"
  "screen_dragondestructiondefense.gif"
  "screen_panicplaneflight.gif"
)

tmpdir=$(mktemp -d)
echo "Creating temporary directory: $tmpdir"

# First, let's trim and standardize each GIF to 16:9 portrait format (9:16)
for i in "${!gifs[@]}"; do
  echo "Processing ${gifs[$i]}..."
  # Trim to 3 seconds, resize to 540x960 (9:16 aspect ratio), ensure consistent format
  ffmpeg -y -t 3 -i "${gifs[$i]}" \
    -vf "scale=540:960:force_original_aspect_ratio=decrease,pad=540:960:(ow-iw)/2:(oh-ih)/2:black,fps=30,setsar=1:1" \
    -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p \
    "$tmpdir/part${i}.mp4"
done

# Concatenate into final MP4
echo "Concatenating into MP4..."
ffmpeg -y \
  -i "$tmpdir/part0.mp4" \
  -i "$tmpdir/part1.mp4" \
  -i "$tmpdir/part2.mp4" \
  -i "$tmpdir/part3.mp4" \
  -i "$tmpdir/part4.mp4" \
  -i "$tmpdir/part5.mp4" \
  -i "$tmpdir/part6.mp4" \
  -filter_complex "[0:v][1:v][2:v][3:v][4:v][5:v][6:v]concat=n=7:v=1:a=0[outv]" \
  -map "[outv]" -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p merged.mp4

rm -r "$tmpdir"
echo "Merged MP4 saved as merged.mp4 (21 seconds total, 540x960 portrait)"