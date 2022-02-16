import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface AlertProps {
    status?: 'warning' | 'default' | 'error'
    label: string
    icon?: JSX.Element
}
export const Alert = ({
    status = 'default',
    label,
    icon = <div></div>,
    ...props
}: AlertProps) => {
    let getSize = () => {
        switch (status) {
            case 'warning':
                return 'text-3xl'
            case 'error':
                return 'text-2xl'

            default:
                return 'text-base'
        }
    }

    let classNameBase =
        'mx-auto items-center undefined grid place-items-strech rounded-none text-white px-4 py-5'
    classNameBase =
        classNameBase + (status === 'default' ? ' bg-black' : ' bg-red-600')

    return (
        <div className={classNameBase}>
            <div>{label}</div>
        </div>
    )
}

export default Alert
