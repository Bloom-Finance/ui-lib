import { MouseEventHandler } from 'react'
import React, { FC } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'warning' | 'tonal'
    size?: 'large' | 'small'
    disabled?: boolean
    label: string
    icon?: JSX.Element
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({
    type = 'primary',
    size = 'large',
    disabled = false,
    label,
    icon = <div></div>,
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
            className={`${classNameBase} ${getType()} ${getSize()} `}
        >
            {icon}
            {label}
        </button>
    )
}

export default Button
