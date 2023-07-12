'use client'
import React from 'react'
import { motion } from 'framer-motion';

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

function lincolnCathedralSvg() {
    return(
        <motion.svg
            width={400}
            height={400}
            initial="hidden"
            animate="visible"
        >
            <motion.polyline variants={draw} id="XMLID_34_" class="st0" points="45,337 45,225 53.7,171.8 66,225.3 66,235 98,235 98,90 102.1,57.3 102,53.3 102,57.8 
                109,90.5 109,97 136,97.6 136,89 141,55.2 141,51.2 141,55.2 148,89.1 148,213 "/>
            <motion.polyline variants={draw} id="XMLID_31_" class="st0" points="98,236 142,236 142,215 142,224.2 167,182.7 167,173 167,183 195,224.9 195,214 
                195,234 266,234 268,201.4 271.4,234 276,234 276,216 277.1,225.6 290,164 303,225.3 303,216 303,337 "/>
            <motion.polyline variants={draw} id="XMLID_29_" class="st0" points="363,337 363,245 357.3,233.8 353.3,184.4 347.1,233.4 343,238.9 343,244 333,244 
                331.7,217.2 329.6,244 321,244 318.4,201 316,244 304,244 "/>
            <motion.polyline variants={draw} id="XMLID_28_" class="st0" points="84,234 84,229 85.6,232 89,232 89,219 91.1,221.5 95.4,200.8 98.2,214.4 "/>
            <motion.line id="XMLID_27_" class="st0" x1="168.3" y1="184.4" x2="193.8" y2="189.2"/>
            <motion.polyline variants={draw} id="XMLID_26_" class="st0" points="189,188 189,73 193,37.7 193,31 193,38 195.7,69.9 193,85 193,223 "/>
            <motion.polyline variants={draw} id="XMLID_25_" class="st0" points="196,69.9 200,46.6 200,41 200,47 204.3,71.4 "/>
            <motion.polyline variants={draw} id="XMLID_24_" class="st0" points="236.2,70.8 240,45.9 240,40 240,46 246,86.1 246,234 "/>
            <motion.polyline variants={draw} id="XMLID_23_" class="st0" points="351,203 326,203 326,196 326,202.5 298.8,203 "/>
            <motion.polyline variants={draw} id="XMLID_22_" class="st0" points="243.5,71.2 249,44.5 249,38 249,44 253,80.2 253,204 282,204 "/>
            <motion.polyline variants={draw} id="XMLID_21_" class="st0" points="241.1,52.2 243,34.5 243,29 243,34 246.1,57.8 "/>
            <motion.path variants={draw} id="XMLID_20_" class="st0" d="M208.9,66.2"/>
            <motion.polyline variants={draw} id="XMLID_19_" class="st0" points="205.5,67 205.5,71.3 236.2,70.8 "/>
            <motion.polyline variants={draw} id="XMLID_18_" class="st0" points="236.5,69.5 235,65.9 235,62 235,66 233.7,71 230,71 228,66.5 228,63 228,67 226.2,71 
                223,71 221,66.8 221,56 221,67 219.6,70.8 216.4,70.8 214,67.1 214,64 214,67 212.1,71 209.6,71.1 208,67.7 208,64 208,68 
                205.5,71.4 "/>
            <motion.path variants={draw} id="XMLID_17_" class="st0" d="M199.5,337v-28.4c0-3.8,1.5-7.5,4.2-10.2h0c5.6-5.7,14.8-5.7,20.5,0l0.1,0.2
                c2.7,2.7,4.2,6.4,4.2,10.2V337"/>
            <motion.path variants={draw} id="XMLID_16_" class="st0" d="M113.9,337v-28.2c0-3.8,1.5-7.5,4.2-10.2h0c5.6-5.7,14.8-5.7,20.5,0l0.1,0.2
                c2.7,2.7,4.2,6.4,4.2,10.2V337"/>
            <motion.path variants={draw} id="XMLID_15_" class="st0" d="M152.5,337v-65l2.1-7.8c1.3-5,4.2-9.5,8.1-12.9l7-6l8.6,6.1c3.8,2.7,6.5,6.5,7.9,10.9l3.2,10.2
                V337"/>
            <motion.circle variants={draw} id="XMLID_14_" class="st0" cx="79" cy="313.8" r="5.9"/>
            <motion.circle variants={draw} id="XMLID_13_" class="st0" cx="267" cy="317.8" r="5.9"/>
            <motion.path variants={draw} id="XMLID_12_" class="st0" d="M331.7,337v-17.7c0-2.4,0.9-4.7,2.6-6.3l0,0c3.5-3.5,9.3-3.5,12.8,0l0.1,0.1
                c1.7,1.7,2.6,4,2.6,6.3V337"/>
            <motion.path variants={draw} id="XMLID_11_" class="st0" d="M114.5,153.5V123c0-1.3,0.2-2.7,0.6-4l1.3-4.6c0.3-1.2,2-1.2,2.4-0.1l1.7,4.5
                c0.6,1.6,0.9,3.3,0.9,5l0.1,29.7C121.5,153.5,113.8,153.5,114.5,153.5z"/>
            <motion.path variants={draw} id="XMLID_10_" class="st0" d="M127.8,153.6v-30.5c0-1.3,0.2-2.7,0.6-4l1.3-4.6c0.3-1.2,2-1.2,2.4-0.1l1.7,4.5
                c0.6,1.6,0.9,3.3,0.9,5l0.1,29.7C134.8,153.6,127.1,153.6,127.8,153.6z"/>
            <motion.path variants={draw} id="XMLID_9_" class="st0" d="M210.2,149.4v-30.5c0-1.3,0.2-2.7,0.6-4l1.3-4.6c0.3-1.2,2-1.2,2.4-0.1l1.7,4.5
                c0.6,1.6,0.9,3.3,0.9,5l0.1,29.7C217.2,149.4,209.5,149.4,210.2,149.4z"/>
            <motion.path variants={draw} id="XMLID_8_" class="st0" d="M223.5,149.5V119c0-1.3,0.2-2.7,0.6-4l1.3-4.6c0.3-1.2,2-1.2,2.4-0.1l1.7,4.5
                c0.6,1.6,0.9,3.3,0.9,5l0.1,29.7C230.5,149.5,222.8,149.5,223.5,149.5z"/>
            <motion.polyline variants={draw} id="XMLID_7_" class="st0" points="156,201 156,87.4 150,61.5 150,57 150,62 150,61.5 146.3,80.7 "/>
            <motion.polyline variants={draw} id="XMLID_6_" class="st0" points="109.3,90.5 115,63.3 115.1,59.3 114.9,63.3 121,90.1 121,97 "/>
            <motion.line variants={draw} id="XMLID_5_" class="st0" x1="126" y1="89" x2="126" y2="97"/>
            <motion.line variants={draw} id="XMLID_4_" class="st0" x1="131" y1="89" x2="131" y2="97"/>
        </motion.svg>
    )
}

export default function LineArt({svg}) {
    // let jsx = svgToMotionPathJSX(svg);
    const cathedral = lincolnCathedralSvg();
    return (
        <>{cathedral}</>
    )
}