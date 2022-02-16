import React from 'react'

interface Props {
    children: JSX.Element
}

const Component = (props: Props) => {
    return (
        <div className="bg-white  border-b  border-slate-500  top-0 w-full">
            {props.children}
        </div>
    )
}

export default Component
