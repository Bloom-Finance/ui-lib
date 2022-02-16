import React from 'react'
import Icon from '../icon'
import Container from '../container'
import Label from '../label'

interface Props {
    status?: 'warning' | 'default' | 'error'
    subtitle?: string
    icon?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="mx-auto items-center undefined grid place-items-strech rounded-none">
            <div
                className={`px-4 py-5  ${props.status === 'default' && 'bg-black'} ${
                    props.status === 'warning' && 'bg-yellow-500'
                } ${props.status === 'error' && 'bg-red-600'}`}
            >
                <div className='font-semibold'>
                    {props.icon}
                    <Label type='small' color="white">{props.subtitle}</Label>
                </div>
            </div>
        </div>
    )
}

export default Component
