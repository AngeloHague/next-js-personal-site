'use client'
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  function getMotionPaths(paths, strokeWidth) {
    return paths.map((path) =>
     (
        <motion.path
            key={path.id}
            id={path.id}
            class={path.class}
            d={path.d}
            stroke='white'
            fill='none'
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            variants={draw}
        />
    ))
}
function getMotionPolylines(paths, strokeWidth) {
    return paths.map((path) =>
     (
        <motion.polyline
            key={path.id}
            id={path.id}
            class={path.class}
            points={path.points}
            stroke='white'
            fill='none'
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            variants={draw}
        />
    ))
}
function getMotionLines(paths, strokeWidth) {
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
                stroke='white'
                fill='none'
                strokeWidth={strokeWidth}
                strokeLinecap='round'
                variants={draw}
            />
        )
    })
}

export default function LineArt({json, fixedWidth=800, fixedHeight=800}) {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const minVal = (fixedWidth < fixedHeight) ? fixedWidth : fixedHeight;
    const strokeWidth = Math.round(minVal / 200, 0);
    console.log(strokeWidth)

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
    for (let el in json) {
        // if (el=='durations') {
        //     durations = {
        //         animation: json[el].animation,
        //         times: json[el].times,
        //         fadein: json[el].fadein,
        //         fadeout: json[el].fadeout,
        //     }
        // }
        if (el=='paths') {
            paths = getMotionPaths(json[el], strokeWidth)
        }
        else if (el=='polylines') {
            polylines = getMotionPolylines(json[el], strokeWidth)
        }
        else if (el=='lines') {
            lines = getMotionLines(json[el], strokeWidth)
        }
    }

    return (
        <motion.div className='animationContainer' ref={containerRef}
        style={{
            width: '100%',
            aspectRatio: '1/1',
            height: 'auto'
        }}
        >
            <motion.svg
                width={containerSize.width}
                height={containerSize.height}
                viewBox={`0 0 ${fixedWidth} ${fixedHeight}`} // Replace fixedWidth and fixedHeight with your desired fixed size
                preserveAspectRatio="xMidYMid meet"
                initial="hidden"
                animate="visible"
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
        }} alt={name+' fallback image (no javascript animation)'} src={'/fallbacks/'+name+'.svg'} />
            </noscript>
        </motion.div>
    )
}

