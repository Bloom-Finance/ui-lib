import React from 'react'

interface Props {
    type?: 'title' | 'subtitle' | 'small' | 'xl'
    children?: any
    color?:
        | 'warning'
        | 'error'
        | 'success'
        | 'gray-500'
        | 'gray-600'
        | 'white'
        | 'gray-400'
        | 'gray-700'
    className?: string
    onClick?: (event: any) => void
    clickable?: boolean
    align?: 'left' | 'right' | 'center'
}

const Component = (props: Props): JSX.Element => {
    const getColor = () => {
        switch (props.color) {
            case 'warning':
                return 'text-yellow-800'
            case 'error':
                return 'text-red-500'
            case 'success':
                return 'text-green-500'
            case 'white':
                return 'text-white'
            case 'gray-500':
                return 'text-gray-500'

            case 'gray-400':
                return 'text-gray-400'
            case 'gray-600':
                return 'text-gray-600'
            case 'gray-700':
                return 'text-gray-700'
            default:
                return 'text-gray-800'
        }
    }

    const getSize = () => {
        switch (props.type) {
            case 'title':
                return 'text-3xl'
            case 'subtitle':
                return 'text-2xl'
            case 'xl':
                return 'text-xl'
            case 'small':
                return 'text-sm'
            default:
                return 'text-base'
        }
    }
    const getTextAlign = () => {
        switch (props.align) {
            case 'left':
                return 'text-left'
            case 'right':
                return 'text-right'
            default:
                return 'text-center'
        }
    }

    return (
        <div
            onClick={props.onClick}
            className={`${
                props.className
            } ${getSize()} ${getColor()} ${getTextAlign()}  ${
                props.clickable && 'cursor-pointer'
            }`}
        >
            {props.children}
        </div>
    )
}

export default Component
