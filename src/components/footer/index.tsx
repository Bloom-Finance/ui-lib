import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface FooterProps {
    children: JSX.Element
    className?: string
}
export const Footer = ({ children, ...props }: FooterProps) => {
    let classNameBase =
        'fixed bottom-0 w-full p-8 bg-white inset-x-0 border-t border-gray-200 '
    classNameBase = classNameBase

    return <div className={`${classNameBase} `}>{children}</div>
}

export default Footer
