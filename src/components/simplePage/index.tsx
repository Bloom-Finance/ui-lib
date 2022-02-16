import React from 'react'

interface Props {
    header: JSX.Element
    footer?: JSX.Element
    children: JSX.Element
    className?: string
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className={props.className}>
            <div>{props.header}</div>
            <div>{props.children}</div>
            <div>{props.footer}</div>
        </div>
    )
}
export default Component
