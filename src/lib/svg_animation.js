// 'use server'
import path from 'path';
import fs from 'fs';
import {load} from 'cheerio';

const SvgAnimationDirectory = path.join(process.cwd(), 'src', 'assets', 'svg_animations');
const AnimationOutputDirectory = path.join(process.cwd(), 'src', 'data', 'animations');

export const getShapes = (subdir, slug) => {
    // get path of file in subdirectory
    const svg = path.join(SvgAnimationDirectory, subdir, slug);
    const file = fs.readFileSync(svg+'.svg');
    // use cheerio to read svg
    const $ = load(file, {xmlMode: true});
    // get viewbox
    const viewbox = $('svg').attr('viewBox');
    // find path tags within svg (each path is an object to be animated) and store within array
    const d = []
    const paths = $('svg').find('path');
    paths.each((index, path) => {
        let dAttr = $(path).attr('d');
        let cleaned = dAttr.replace(/[\n\t]/g, '');
        d.push(cleaned);
    });
    return [viewbox, d];
}

export const getAnimFrames = (name) => {
    // get pathname and files in subdirectory
    const subdir = path.join(SvgAnimationDirectory, name);
    const files = fs.readdirSync(subdir);
    // return the name of each svg file / frame
    const svgFrames = files.filter((file) => file.endsWith('.svg'));
    const slugs = svgFrames.map((file) => file.replace('.svg', ''));
    return slugs;
  }


  function transpose(matrix) {
    // transpose array vanilla js: https://stackoverflow.com/a/46805290/16488477
    const rows = matrix.length, cols = matrix[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
      grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[j][i] = matrix[i][j];
      }
    }
    return grid;
  }

export function getPaths(name) {
    let all_paths = []
    let viewbox = null;
    // get paths from svg files in folder containing name
    let frames = getAnimFrames(name);
    // add first frame to end of array for animating looping
    frames.push(frames[0]);
    // add paths to array
    frames.forEach(f => {
        let [vb, paths] = getShapes(name, f);
        // get viewbox from first svg
        viewbox = (!viewbox) ? vb : viewbox;
        console.log(viewbox)
        all_paths.push(paths);
    });
    // tranpose array and return
    return [viewbox, transpose(all_paths)];
}

export function objectPathsToMotionGroups(paths) {
    const objectGroups = [];
    for (let i = 0; i < paths.length; i++) {
        let frames = paths[i];
        objectGroups.push({
            id: i,
            paths: frames
        })
    }
    return objectGroups;
}

const storeAnimation = (animation) => {
    try {
        let output_path = path.join(AnimationOutputDirectory, animation.name+'.json');
        fs.writeFileSync(output_path, JSON.stringify(animation))
    } catch (err) {
      console.error(err)
    }
  }

const loadAnimation = (name) => {
    let animation_path = path.join(AnimationOutputDirectory, name+'.json');
    try {
        return fs.readFileSync(animation_path, 'utf8')
    } catch (err) {
        console.error(err)
        return false
    }
}

export function createAnimationFromSvgFolder(name) {
    let [viewbox, shapes] = getPaths(name);
    let [mx, my, width, height] = viewbox.split(' ');
    let objects = objectPathsToMotionGroups(shapes);
    let animation = {
        name: name,
        mx: mx,
        my: my,
        width: width,
        height: height,
        objects: objects
    }
    if (!fs.existsSync(AnimationOutputDirectory)) {
        fs.mkdirSync(AnimationOutputDirectory);
        console.log('\nCreated animations directory...\n')
    }
    storeAnimation(animation);
    console.log(animation);
    return animation;
}

export function readAnimationFromFile(name) {
    let animation_path = path.join(AnimationOutputDirectory, name+'.json');
    let animation = loadAnimation(animation_path);
    return animation;
}