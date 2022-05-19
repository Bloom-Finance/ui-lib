import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

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
                return 'bg-black text-white'
            case 'warning':
                return 'bg-red-600 text-white '
            case 'secondary':
                return 'bg-white text-black border border-gray-300'
            case 'tonal':
                return 'bg-gray-100 text-gray-900 '
            default:
                return 'bg-black text-white'
        }
    }
    const getSize = () => {
        switch (size) {
            case 'large':
                return 'p-4'
            case 'small':
                return 'p-2'
        }
    }

    let classNameBase =
        'text-base font-semibold rounded-lg w-full flex items-center justify-center gap-x-2 '
    classNameBase = classNameBase + getType() + getSize()
    classNameBase = classNameBase + (disabled ? ' opacity-50' : '')
    return (
        <button
            onClick={props.onClick}
            className={`${classNameBase} ${getType()} ${getSize()} `}
        >
            {icon}
            {label}
        </button>
    )
}

export default Button
