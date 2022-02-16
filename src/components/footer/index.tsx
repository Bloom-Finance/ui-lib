import React from 'react'

interface Props {
    children: JSX.Element
    className?: string
}

const Component = (props: Props): JSX.Element => {
    return (
        <div
            className={`fixed bottom-0 w-full p-8 bg-white inset-x-0 border-t border-gray-200 ${props.className}`}
        >
            {props.children}
        </div>
    )
}

export default Component
