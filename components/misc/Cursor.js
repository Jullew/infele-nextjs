'use client'
import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {

    const [largecircle, setlargecircle ] = useState({x: 0, y: 0})
    const [smallcircle, setsmallcircle] = useState({x: 0, y: 0})

    useEffect(() => {
        const mousemove = (e) => {
            setlargecircle({x: e.clientX, y: e.clientY})
            setsmallcircle({x: e.clientX, y: e.clientY})
        }
window.addEventListener('mousemove', mousemove)
        return () => {
            window.removeEventListener('mousemove', mousemove)
        }
    })

  return (
    <div><motion.div animate={{x: largecircle.x - 32, y: largecircle.y - 32, transition:{type: "spring", mass:2}}} className='large_circle'></motion.div>
    <motion.div animate={{x: smallcircle.x - 8, y: smallcircle.y - 8, transition:{type: "spring", mass:0.005}}} className='small_circle'></motion.div></div>
  )
}

export default Cursor