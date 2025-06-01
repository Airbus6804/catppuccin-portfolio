"use client"

import { useState } from 'react'
import UiModal from '../ui/modal'

export default function WorkExperienceModalTrigger(props: {children: React.ReactNode, modalChildren: React.ReactNode, containerProps?: React.HTMLAttributes<HTMLDivElement>}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(true)} {...props.containerProps}>
                {props.children}
            </div>
            <UiModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {props.modalChildren}
            </UiModal>
        </>
    )
} 