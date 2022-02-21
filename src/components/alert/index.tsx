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
    let getStatus = () => {
        switch (status) {
            case 'warning':
                return 'bg-yellow-500 px-4 py-5'
            case 'error':
                return 'bg-red-600 px-4 py-5'
            default:
                return 'bg-black px-4 py-5'
        }
    }

    let classNameBase =
        'mx-auto items-center flex justify-between rounded-none text-white px-4 py-5 '
    classNameBase = classNameBase + getStatus()

    return (
        <div className={`${classNameBase} ${getStatus()} `}>
            <div> {label}</div>
            <div className="mr-2 float-rigth">{icon} </div>
        </div>
    )
}

export default Alert
