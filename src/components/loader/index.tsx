import { Children, MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface LoaderProps {
    title: string
}
export const Loader = ({ title, ...props }: LoaderProps) => {
    let classNameBase = 'h-screen flex items-center justify-center '
    classNameBase = classNameBase

    return (
        <div className={classNameBase}>
            <div>{title} ... </div>
        </div>
    )
}

export default Loader
