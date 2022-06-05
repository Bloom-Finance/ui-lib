import { Children, MouseEventHandler } from 'react'
import React, { FC } from 'react'
import style from './styles.module.scss'

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
    const getColor = () => {
        switch (color) {
            case 'warning':
                return style.warning
            case 'error':
                return style.error
            case 'success':
                return style.success
            case 'white':
                return style.textWhite
            case 'gray-500':
                return style.gray500
            case 'gray-400':
                return style.gray400
            case 'gray-600':
                return style.gray600
            case 'gray-700':
                return style.gray700
            case 'gray-900':
                return style.gray900
            case 'yellow-500':
                return style.yellow500
            default:
                return style.gray800
        }
    }

    const getWeight = () => {
        switch (weight) {
            case 'semibold':
                return style.semiBold
            case 'bold':
                return style.bold
        }
    }

    const getSize = () => {
        switch (type) {
            case 'title':
                return style.title
            case 'subtitle':
                return style.subTitle
            case 'xl':
                return style.xl
            case 'small':
                return style.small
            default:
                return style.base
        }
    }
    const getTextAlign = () => {
        switch (align) {
            case 'left':
                return style.left
            case 'right':
                return style.right
            default:
                return style.center
        }
    }

    return (
        <div
            onClick={onClick}
            className={`${className} ${getSize()} ${getColor()} ${getWeight()} ${getTextAlign()}  ${clickable} cursor-pointer`}
        >
            {text}
            {children}
        </div>
    )
}

export default Label
