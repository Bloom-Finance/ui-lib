import React from 'react'

interface Props {
    children?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="bg-white p-2 py-4 px-4 flex justify-center items-center rounded-lg shadow w-12 h-12">
            {props.children}
        </div>
    )
}

export default Component
