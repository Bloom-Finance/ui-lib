import React from 'react'
import Avatar from '../avatar'

interface Props {
    userName?: string
    email?: string
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="avatar">
            <Avatar />
            <div>
                <h2 className=" mt-1 text-gray-900">{props.userName}</h2>
                <h4 className=" text-gray-600">{props.email}</h4>
            </div>
        </div>
    )
}

export default Component
