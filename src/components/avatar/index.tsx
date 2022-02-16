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

const Component = (props: Props): JSX.Element => {
    return (
        <div className={props.className}>
            <div className="avatar">
                <div className="mb-2 rounded-btn w-12 h-12 bg-gray-900 text-white text-center text-base font-bold text-uppercase">
                    <div className="py-3">LM</div>

                    {/*<img
                        src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
                        alt="avatar"
                    />*/}
                </div>
                <div>
                    <h2 className="ml-4 mt-1">{props.user}</h2>
                    <h4 className="ml-4">{props.label}</h4>
                </div>
            </div>
        </div>
    )
}

export default Component
