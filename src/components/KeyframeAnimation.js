'use client'
import React from 'react'
import { motion } from 'framer-motion';

function getMotionPaths(paths, dur) {
    return paths.map((path) =>
     (
        <motion.path
            key={path.id}
            id={path.id}
            class={path.class}
            d={path.d}
            animate={{ d: path.d_z }}
            stroke='white'
            fill='none'
            strokeWidth='2'
            strokeLinecap='round'
            transition={{
                ease: "easeInOut",
                duration: dur,
                repeat: Infinity, repeatType: 'reverse' }}
        />
    ))
}
function getMotionPolylines(paths, dur) {
    return paths.map((path) =>
     (
        <motion.polyline
            key={path.id}
            id={path.id}
            class={path.class}
            points={path.points}
            animate={{ points: path.points_z }}
            stroke='white'
            fill='none'
            strokeWidth='2'
            strokeLinecap='round'
            transition={{
                ease: "easeInOut",
                duration: dur,
                repeat: Infinity, repeatType: 'reverse' }}
        />
    ))
}
function getMotionLines(paths, dur) {
    return paths.map((path) => {
        let { x1, x2, y1, y2 } = path.xy_z;
        x1 = x1.map(Number)
        x2 = x2.map(Number)
        y1 = y1.map(Number)
        y2 = y2.map(Number)
        return (
            <motion.line
                key={path.id}
                id={path.id}
                class={path.class}
                x1={path.x1}
                x2={path.x2}
                y1={path.y1}
                y2={path.y2}
                animate={{
                    x1: x1,
                    x2: x2,
                    y1: y1,
                    y2: y2
                }}
                stroke='white'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                transition={{
                    ease: "easeInOut",
                    duration: dur,
                    repeat: Infinity, repeatType: 'reverse' }}
            />
        )
    })
}

export default function KeyframeAnimation({json, width=800, height=800}) {
    let paths, polylines, lines;
    for (let el in json) {
        if (el=='paths') {
            paths = getMotionPaths(json[el], 2)
        }
        else if (el=='polylines') {
            polylines = getMotionPolylines(json[el], 2)
        }
        else if (el=='lines') {
            json[el].forEach(element => {
                console.log(element.xy_z.x1);
            });
            lines = getMotionLines(json[el], 2)
        }
    }
    return (
        <motion.svg width={width} height={height}>
            {paths}
            {polylines}
            {lines}
        </motion.svg>
    )
}
