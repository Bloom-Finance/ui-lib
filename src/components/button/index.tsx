import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface ButtonProps {
    type?: 'primary' | 'secondary'
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
    let classNameBase = 'text-lg font-semibold rounded-lg p-4 w-full flex items-center justify-center'
    classNameBase =
        classNameBase +
        (type === 'primary'
            ? ' bg-black text-white'
            : ' bg-white text-black border border-gray-300')
    classNameBase = classNameBase + (disabled ? ' opacity-50' : '')
    return (
        <button className={classNameBase}>
            <div>
                <span>{icon}</span>
                <span>{label}</span>
            </div>
        </button>
    )
}

export default Button
