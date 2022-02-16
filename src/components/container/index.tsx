import React from 'react'

interface Props {
    children: any
    type: 'row' | 'column'
    className?: string
    justify?: 'strech' | 'center' | 'end' | 'start' | 'between'
    key?: string
}

const Component = (props: Props): JSX.Element => {
    return (
        <div
            key={props.key}
            className={`container px-8 py-6 mx-auto items-center ${
                props.className
            } ${
                props.type === 'column'
                    ? `flex justify-${props.justify}`
                    : `grid place-items-${props.justify}`
            }`}
        >
            {props.children}
        </div>
    )
}

export default Component
