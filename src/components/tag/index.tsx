import React from 'react'

interface Props {
    label: string
    icon?: JSX.Element
    color: 'green' | 'yellow' | 'red'
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className={`bg-${props.color}-400`}>
            <span>{props.icon}</span>
            <span>{props.label}</span>
        </div>
    )
}

export default Component
