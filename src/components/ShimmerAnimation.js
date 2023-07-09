'use client'
import React, { useEffect } from 'react'
import shimmer from '@/data/animations/shimmer.json'
import { motion } from 'framer-motion';

function shimmerSvg(paths, dur) {
    return <motion.path
                // className='st0'
                animate={{ d: paths
                }}
                stroke='white'
                strokeWidth='4'
                strokeLinecap='round'
                transition={{
                    ease: "easeInOut",
                    duration: dur,
                    repeat: Infinity, repeatType: 'reverse' }}
            />
}

const object_paths = [
    // block 1
    [['M 10 04 H 182',
    'M 16 04 H 176'],1],
    [['M 14 08 H 162',
    'M 30 08 H 178'],1],

    // block 2
    [['M 20 14 H 172',
    'M 30 14 H 162'],1],
    [['M 30 18 H 147',
    'M 45 18 H 146'],1],

    // block 3
    [['M 40 24 H 122',
    'M 40 24 H 128'],1],
    [['M 52 28 H 132',
    'M 44 28 H 148'],1],
    [['M 46 32 H 146',
    'M 56 32 H 136'],1],

    // block 4
    [['M 80 38 H 122',
    'M 70 38 H 128'],1],
    [['M 70 42 H 112',
    'M 85 42 H 122'],1],
    [['M 80 46 H 116',
    'M 90 46 H 128'],1],

    // last block
    [['M 92 100 H 114',
    'M 94 100 H 120'],1],
    [['M 92 104 H 110',
    'M 86 104 H 112'],1],
    [['M 94 108 H 108',
    'M 90 108 H 110'],1]
]

export default function ShimmerAnimation() {
    const shimmer_svgs = object_paths.map(([paths, dur]) => (shimmerSvg(paths, dur)));
    return (
        <svg width={192} height={110}>
            {shimmer_svgs}
        </svg>
    
    )
}
