"use client"

import { motion } from "framer-motion";

export function pickRandomDirection(): 'up' | 'right' | 'left' | 'bottom' {
    const directions = ['up', 'right', 'left', 'bottom'] as const
    return directions[Math.floor(Math.random() * directions.length)]
}
export default function FadeIn({children, direction, className}: {children: React.ReactNode, direction ? : 'up' | 'right' | 'left' | 'bottom', className?: string}) {
    if(!direction) {
        direction = pickRandomDirection()
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: direction === 'up' ? 20 : direction === 'bottom' ? -20 : 0, x: direction === 'right' ? 20 : direction === 'left' ? -20 : 0}}
            animate={{ opacity: 1, y: 0, x: 0}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={className}
        >
            {children}  
        </motion.div>
    )
}
