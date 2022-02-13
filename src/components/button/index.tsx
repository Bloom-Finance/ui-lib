import { MouseEventHandler } from 'react'
import React, { FC } from 'react'

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean
    /**
     * What background color to use
     */
    backgroundColor?: string
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large'
    /**
     * Button contents
     */
    label: string
    /**
     * Optional click handler
     */
    onClick?: MouseEventHandler<HTMLButtonElement>

    children: JSX.Element
}
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    return <button className="btn btn-primary">Un boton</button>
}

export default Button
