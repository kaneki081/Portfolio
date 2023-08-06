'use client'
import React, { useEffect } from 'react';
import {motion,useInView,useAnimation  } from 'framer-motion';
import { useRef } from 'react';

interface Props{
    children:JSX.Element | JSX.Element[] | string,
    className?:string,
    delay?:number
}

export default function DelayOnReveal({delay,children,className}:Props) {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }else{
      mainControls.start("hidden")
      slideControls.start("hidden")
    }
  },[isInView])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.h1
        variants={{
          hidden:{opacity:0,y:50},
          visible:{opacity:1,y:0,
          transition:{duration: 0.3, delay: 0.25}}
        }}
        initial="hidden"
        animate={mainControls}
        >
        {children}
      </motion.h1>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgb(0,0,0)",
          zIndex: 20,
        }}
      />
    </div>
  )
}