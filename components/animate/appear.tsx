'use client'
import React, { useEffect } from 'react';
import {motion,useInView,useAnimation  } from 'framer-motion';
import { useRef } from 'react';

interface Props{
    children:JSX.Element | JSX.Element[],
    className?:string,
    delay?:number
}

export default function Appear({delay,children,className}:Props) {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const mainControls = useAnimation();
  
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden:{opacity:0,y:-75},
        visible:{opacity:1,y:0,transition:{delay:delay ? delay : 0}}
      }}
      initial="hidden"
      animate={mainControls}
      >
      {children}
    </motion.div>
  )
}
