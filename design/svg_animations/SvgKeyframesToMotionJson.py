# Title: SVG Animation Frames to JSON for Framer-Motion Conversion Script
# By: Angelo Hague, 2013
# Description:
# A simple python script to convert a folder of SVG keyframes into a list of values to be used as keyframes in Framer-Motion animations.
# Assumptions:
# This script assumes all frames are in alphabetical/numerical order within a folder, and that each element is present in each frame in the same order in the SVG file.
# e.g. Elements have been copied and translated, resizes, etc. between frames.
# Styles are not copied, as this is assumed to be done in the animation.js file

import os
import sys
import xml.etree.ElementTree as ET
import json

INDENTATION = 0

def svg_to_dict(contents):
    output = {}
    # parse svg string
    root = contents.getroot()
    # extract info from svg
    output['paths'] = []
    output['polylines'] = []
    output['lines'] = []
    # extract paths
    for path in root.findall('.//{http://www.w3.org/2000/svg}path'):
        attribs = path.attrib
        output['paths'].append(attribs)
    # extract lines
    for line in root.findall('.//{http://www.w3.org/2000/svg}line'):
        attribs = line.attrib
        output['lines'].append(attribs)
    # extract polylines
    for polyline in root.findall('.//{http://www.w3.org/2000/svg}polyline'):
        attribs = polyline.attrib
        output['polylines'].append(attribs)
    # print(output)
    return output




if (len(sys.argv) != 2):
    print('Invalid arguments. Please specify a target folder...')
    print('e.g. SvgToMotionJson.py [target_folder]')
else:
    # get folder path from cli arg
    folder_path = sys.argv[1]
    # check path exists
    if not os.path.isdir(folder_path):
        print(f'Error: {folder_path} is not a valid directory.')
        sys.exit(1)
    
    animation = {}
    frame_idx = 1
    # iterate over files in folder
    for file_name in os.listdir(folder_path):
        # join file path
        file_path = os.path.join(folder_path, file_name)
        # check if svg file
        if os.path.isfile(file_path) and file_path.endswith('.svg'):
            contents = ET.parse(file_path)
            print(f'Converting {file_name} to json...')
            # convert svg to dictionary
            svg_dict = svg_to_dict(contents)
            # add initial values to array
            if animation == {}: animation = svg_dict.copy()
            for group in list(svg_dict):
                # convert values to array so later frames can be pushed into 
                for i, el in enumerate(svg_dict[group]):
                    for attr in list(el):
                        # handle paths
                        if attr == 'd':
                            # add paths array to element if not exists
                            if (attr+'_z') not in animation[group][i]:
                                animation[group][i][attr+'_z'] = [svg_dict[group][i][attr]]
                            else: animation[group][i][attr+'_z'].append(svg_dict[group][i][attr])
                        # handle polylines
                        elif attr == 'points':
                            # add points array to element if not exists
                            if (attr+'_z') not in animation[group][i]:
                                animation[group][i][attr+'_z'] = [svg_dict[group][i][attr]]
                            else: animation[group][i][attr+'_z'].append(svg_dict[group][i][attr])
                        # handle lines
                        else:
                            for xy in ['x1','x2','y1','y2']:
                                if attr == xy:
                                    # add paths dict to element if not exists
                                    if 'xy_z' not in animation[group][i]: animation[group][i]['xy_z'] = {}
                                    # add xy (e.g. x1) to dictionary if not exists
                                    if xy not in animation[group][i]['xy_z']: animation[group][i]['xy_z'][xy] = [svg_dict[group][i][xy]]
                                    else: animation[group][i]['xy_z'][xy].append(svg_dict[group][i][xy])
            print('Done...\n')
    print('Saving to file...')
    output_path = os.path.join(folder_path, 'animation.json')
    with open(output_path, 'w') as fp:
        json.dump(animation, fp, indent=INDENTATION)
    print('Saved to target folder as: animation.json')

