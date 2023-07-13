# SVG Animation Frames to JSON for Framer-Motion Conversion Script

### Description:
A simple python script to convert a folder of SVG keyframes into a list of values to be used as keyframes in Framer-Motion animations.

### Assumptions:

This script assumes all frames are in alphabetical/numerical order within a folder, and that each element is present in each frame in the same order in the SVG file.

e.g. Elements have been copied and translated, resizes, etc. between frames.

Styles are not copied, as this is done in the animation.js file.

### Note:
Indentation can be changed in the file after imports, but I kept to 0 for lower JSON file size when shipped to the client.