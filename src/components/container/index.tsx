import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface ContainerProps {
    children: any
    type: 'row' | 'column'
    className?: string
    justify?: 'strech' | 'center' | 'end' | 'start' | 'between'
    key?: string
}
export const Container = ({ ...props }: ContainerProps) => {
    let classNameBase = 'container px-8 py-6 mx-auto items-center '
    classNameBase = classNameBase

    return (
        <div
            key={props.key}
            className={` ${classNameBase} ${props.className} ${
                props.type === 'column'
                    ? `flex justify-${props.justify}`
                    : `grid place-items-${props.justify}`
            }`}
        >
            {props.children}
        </div>
    )
}

export default Container
