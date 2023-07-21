'use client'
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

function getMotionPaths(paths, durations, strokeWidth) {
    let dur = durations.animation;
    let times = durations.times;
    return paths.map((path) =>
     (
        <motion.path
            key={path.id}
            id={path.id}
            class={path.class}
            d={path.d}
            animate={{
                d: path.d_z
            }}
            stroke='white'
            fill='none'
            strokeWidth={strokeWidth}
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
function getMotionPolylines(paths, durations, strokeWidth) {
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
            strokeWidth={strokeWidth}
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
function getMotionLines(paths, durations, strokeWidth) {
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
                strokeWidth={strokeWidth}
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

export default function KeyframeAnimation({json, fixedWidth=800, fixedHeight=800}) {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const strokeWidth = 4;

    useEffect(() => {
        const updateContainerSize = () => {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const minVal = (containerWidth < containerHeight) ? containerWidth : containerHeight;
        setContainerSize({ width: minVal, height: minVal });
        };

        updateContainerSize();
        window.addEventListener('resize', updateContainerSize);

        return () => {
        window.removeEventListener('resize', updateContainerSize);
        };
    }, []);

    let durations, paths, polylines, lines;
    let name = json.name;
    let file_name = name.toLowerCase().replace(' ','_');
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
            paths = getMotionPaths(json[el], durations, strokeWidth)
        }
        else if (el=='polylines') {
            polylines = getMotionPolylines(json[el], durations, strokeWidth)
        }
        else if (el=='lines') {
            lines = getMotionLines(json[el], durations, strokeWidth)
        }
    }



    return (
        <motion.div className='animationContainer' ref={containerRef}
        style={{
            width: '100%',
            height: '100%'
        }}
        >
            <motion.svg
                width={containerSize.width}
                height={containerSize.height}
                viewBox={`0 0 ${fixedWidth} ${fixedHeight}`} // Replace fixedWidth and fixedHeight with your desired fixed size
                preserveAspectRatio="xMidYMid meet"
                >
                {paths}
                {polylines}
                {lines}
            </motion.svg>
            <noscript>
                <Image className='fallback' width='300' height='300' style={{
            width: '100%',
            aspectRatio: '1/1',
            height: 'auto'
        }} alt={name+' fallback image (no javascript animation)'} src={'/fallbacks/'+file_name+'.svg'} />
            </noscript>
        </motion.div>
    )
}
