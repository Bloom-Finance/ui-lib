import React from 'react'

interface Props {
    children?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="bg-white p-2 py-4 px-4  flex justify-center rounded-lg">
            {props.children}
        </div>
    )
}

export default Component
