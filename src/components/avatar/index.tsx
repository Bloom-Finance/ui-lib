/* eslint-disable @next/next/no-img-element */
import React from 'react'
interface Props {
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    label?: string
    type?: 'submit' | 'reset' | null | 'neutral'
    disabled?: boolean
    icon?: any
    size?: 'small' | 'large'
    user?: any
}

export const Component = (props: Props): JSX.Element => {
    return (
        <div className={props.className}>
            <div className="avatar">
                <div className="rounded-btn w-12 h-12 bg-gray-900 text-white text-center text-base font-bold text-uppercase shadow">
                    <div className="py-3">LM</div>
                </div>
            </div>
        </div>
    )
}

export default Component
