import { Children, MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface LabelProps {
    type?: 'title' | 'subtitle' | 'small' | 'xl' | 'base'
    children?: any
    text?: string
    color?:
        | 'warning'
        | 'error'
        | 'success'
        | 'gray-500'
        | 'gray-600'
        | 'white'
        | 'gray-400'
        | 'gray-700'
        | 'gray-900'
        | 'yellow-500'
    weight?: 'semibold' | 'bold'
    className?: string
    onClick?: (event: any) => void
    clickable?: boolean
    align?: 'left' | 'right' | 'center'
}
export const Label = ({
    type = 'small',
    text,
    children,
    color,
    weight,
    className,
    onClick,
    clickable,
    align,
    ...props
}: LabelProps) => {
    let getColor = () => {
        switch (color) {
            case 'warning':
                return 'text-yellow-800'
            case 'error':
                return 'text-red-500'
            case 'success':
                return 'text-green-500'
            case 'white':
                return 'text-white'
            case 'gray-500':
                return 'text-gray-500'
            case 'gray-400':
                return 'text-gray-400'
            case 'gray-600':
                return 'text-gray-600'
            case 'gray-700':
                return 'text-gray-700'
            case 'gray-900':
                return 'text-gray-900'
            case 'yellow-500':
                return 'text-yellow-500'
            default:
                return 'text-gray-800'
        }
    }

    let getWeight = () => {
        switch (weight) {
            case 'semibold':
                return 'font-semibold'
            case 'bold':
                return 'font-bold'
        }
    }

    let getSize = () => {
        switch (type) {
            case 'title':
                return 'text-3xl'
            case 'subtitle':
                return 'text-2xl'
            case 'xl':
                return 'text-xl'
            case 'small':
                return 'text-sm'
            case 'base':
                return 'text-base'
            default:
                return 'text-base'
        }
    }
    let getTextAlign = () => {
        switch (align) {
            case 'left':
                return 'text-left'
            case 'right':
                return 'text-right'
            default:
                return 'text-center'
        }
    }

    let classNameBase = ' '
    classNameBase = classNameBase

    return (
        <div
            onClick={onClick}
            className={`${className} ${getSize()} ${getColor()} ${getWeight()} ${getTextAlign()}  ${
                clickable && 'cursor-pointer'
            }`}
        >
            {text}
            {children}
        </div>
    )
}

export default Label
