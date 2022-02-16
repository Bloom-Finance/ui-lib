import React from 'react'
import Label from '../label'
import Container from '../container'

interface Props {
    type?: 'title' | 'subtitle' | 'small'
    children?: JSX.Element
    color?: 'warning' | 'error' | 'success' | 'gray-500' | 'gray-600' | 'white'
    className?: string
    icon?: any
    clickable?: boolean
    align?: 'left' | 'right' | 'center'
    receiptNumber?: string
    receiptDate?: string
    footer?: JSX.Element
}

const ComponentReceipt = (props: Props): JSX.Element => {
    // const getColor = () => {
    //     switch (props.color) {
    //         case 'success':
    //             return 'bg-green-600'
    //         case 'error':
    //             return 'bg-red-500'

    //         default:
    //             return 'bg-green-600'
    //     }
    // }

    return (
        <div className="mx-4 my-4">
            <div className="bg-green-600 rounded-t-lg p-4">
                <div className="h-12 m-auto">{props.icon}</div>
                <Label align="center" color="white">
                    Payment received successfully
                </Label>
                <Label type="small" color="white">
                    {props.receiptNumber}
                </Label>
                <Label type="small" color="white">
                    {props.receiptDate}
                </Label>
            </div>
            <Container
                type={'row'}
                justify={'strech'}
                className="shadow-2xl rounded-lg"
            >
                <div>{props.children}</div>
                <div className="border-gray-100 border-dashed border-t mt-4">
                    {props.footer}
                </div>
            </Container>
        </div>
    )
}

export default ComponentReceipt
