import { MouseEventHandler } from 'react'
import React, { FC } from 'react'
import Avatar from '../avatar'

interface AuthUserProps {
    userName?: string
    label?: string
    userEmail?: string
}
export const AuthUser = ({ userEmail, userName, ...props }: AuthUserProps) => {
    let classNameBase = 'flex items-center gap-x-4 '
    classNameBase = classNameBase

    return (
        <div className={`${classNameBase}  `}>
            <Avatar label="" />
            <div>
                <h2 className="text-gray-900 text-base font-semibold">
<<<<<<< HEAD
                    {props.userName}
                </h2>
                <h4 className="text-sm text-gray-500">{props.email}</h4>
=======
                    {userName}
                </h2>
                <h4 className="text-sm text-gray-500">{userEmail}</h4>
>>>>>>> 78d4d5cba2303a57df8ec6fc6dbaf3a2c64e8646
            </div>
        </div>
    )
}

export default AuthUser
