import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'warning'
    disabled?: boolean
    label: string
    icon?: JSX.Element
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({
    type = 'primary',
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
            default:
                return 'bg-black text-white'
        }
    }

    let classNameBase =
        'text-base font-semibold rounded-lg p-4 w-full flex items-center justify-center gap-x-2'
    classNameBase = classNameBase + getType()
    classNameBase = classNameBase + (disabled ? ' opacity-50' : '')
    return (
        <button
            onClick={props.onClick}
            className={`${classNameBase} ${getType()} `}
        >
            {icon}
            {label}
        </button>
    )
}

export default Button
