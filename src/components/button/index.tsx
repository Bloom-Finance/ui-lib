import { MouseEventHandler, useState } from 'react'
import React, { FC } from 'react'
import styles from './styles.module.scss'
import Spinner from '../spinner'

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'warning' | 'tonal'
    size?: 'large' | 'small'
    disabled?: boolean
    label: string
    loading?: boolean
    icon?: JSX.Element
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}
export const Button = ({
    type = 'primary',
    size = 'large',
    disabled = false,
    label,
    loading = false,
    icon = <div></div>,
    className = '',
    ...props
}: ButtonProps) => {
    const getType = () => {
        switch (type) {
            case 'primary':
                return styles.primary
            case 'warning':
                return styles.warning
            case 'secondary':
                return styles.secondary
            case 'tonal':
                return styles.tonal
            default:
                return styles.button
        }
    }
    const getSize = () => {
        switch (size) {
            case 'large':
                return styles.large
            case 'small':
                return styles.small
        }
    }

    let classNameBase = styles.button
    classNameBase = classNameBase + ' ' + (disabled ? styles.disabled : '')

    return (
        <button
            onClick={!disabled ? props.onClick : () => null}
            className={`${classNameBase} ${getType()} ${getSize()} ${className}`}
        >
            {icon}
            {loading && <Spinner size={size} />}

            {label}
        </button>
    )
}

export default Button
