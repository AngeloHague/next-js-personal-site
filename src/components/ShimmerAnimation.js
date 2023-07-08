'use client'
import React, { useEffect } from 'react'
import shimmer from '@/data/animations/shimmer.json'
import { motion, useCycle } from 'framer-motion';

export default function ShimmerAnimation() {
    let {name, mx, my, width, height, objects} = shimmer;

    const [currentGroup, cycleGroup] = useCycle(...objects);
  
    useEffect(() => {
      const interval = setInterval(() => {
        cycleGroup();
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
    // console.log(objects)
    return (
        <svg width={width} height={height} viewBox={mx+' '+my+' '+width+' '+height}>
        {objects.map(({ id, paths }) => (
            <motion.path
                key={id}
                d={paths[0]}
                className='st0'
                fill="white"
                stroke="white"
                strokeWidth="3"
                animate={{ d: paths[1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            />
        ))}
        </svg>
    
    )
}
