import React from 'react'
import Avatar from '../avatar'

interface Props {
    userName?: string
    email?: string
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="flex items-center gap-x-4">
            <Avatar />
            <div>
                <h2 className="text-gray-900 text-base font-semibold">
                    {props.userName}
                </h2>
                <h4 className="text-sm text-gray-500">{props.email}</h4>
            </div>
        </div>
    )
}

export default Component
