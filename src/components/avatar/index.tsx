/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface AvatarProps {
    label?: string
    icon?: JSX.Element
    className?: string
    size?: 'small' | 'large'
    user?: string
}
export const Avatar = ({
    user,
    size,
    icon = <div></div>,
    ...props
}: AvatarProps) => {
    let classNameBase =
        'rounded-btn w-12 h-12 bg-gray-900 text-white text-center text-base font-bold text-uppercase shadow  text-white'
    classNameBase = classNameBase

    return (
        <div className={props.className}>
            <div className="avatar">
                <div className={classNameBase}>
                    <div className="py-3">{user}</div>
                </div>
            </div>
        </div>
    )
}

export default Avatar
