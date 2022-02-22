import { MouseEventHandler } from 'react'
import React, { FC } from 'react'
import Avatar from '../avatar'

interface AuthUserProps {
    userName?: string
    userEmail?: string
}
export const AuthUser = ({ userEmail, userName, ...props }: AuthUserProps) => {
    let classNameBase = 'flex items-center gap-x-4 '
    classNameBase = classNameBase

    return (
        <div className={`${classNameBase}  `}>
            <Avatar user="LM" label="" />
            <div>
                <h2 className="text-gray-900 text-base font-semibold">
                    {userName}
                </h2>
                <h4 className="text-sm text-gray-500">{userEmail}</h4>
            </div>
        </div>
    )
}

export default AuthUser
