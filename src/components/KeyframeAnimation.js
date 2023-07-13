'use client'
import React from 'react'
import { motion } from 'framer-motion';

function getMotionPaths(paths, durations) {
    let dur = durations.animation;
    let times = durations.times;
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
                times: times,
                repeat: Infinity,
                repeatType: 'reverse' }}
        />
    ))
}
function getMotionPolylines(paths, durations) {
    let dur = durations.animation;
    let times = durations.times;
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
                times: times,
                repeat: Infinity,
                repeatType: 'reverse' }}
        />
    ))
}
function getMotionLines(paths, durations) {
    let dur = durations.animation;
    let times = durations.times;
    let fadeInDur = durations.fadein;
    let fadeOutDur = durations.fadeout;
    return paths.map((path) => {
        let isFade = path.class.split('_')[0];
        let fade = (isFade == 'fadein') ? fadeInDur : [1];
        fade = (isFade == 'fadeout') ? fadeOutDur : fade;
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
                opacity={fade[0]}
                animate={{
                    x1: x1,
                    x2: x2,
                    y1: y1,
                    y2: y2,
                    opacity: fade,
                }}
                stroke='white'
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                transition={{
                    ease: "easeInOut",
                    duration: dur,
                    times: times,
                    repeat: Infinity,
                    repeatType: 'reverse' }}
            />
        )
    })
}

export default function KeyframeAnimation({json, width=800, height=800}) {
    let durations, paths, polylines, lines;
    for (let el in json) {
        if (el=='durations') {
            durations = {
                animation: json[el].animation,
                times: json[el].times,
                fadein: json[el].fadein,
                fadeout: json[el].fadeout,
            }
        }
        if (el=='paths') {
            paths = getMotionPaths(json[el], durations)
        }
        else if (el=='polylines') {
            polylines = getMotionPolylines(json[el], durations)
        }
        else if (el=='lines') {
            lines = getMotionLines(json[el], durations)
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
