import React from 'react'
import Icon from '../icon'

interface Props {
    onClick: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div onClick={props.onClick} className="cursor-pointer">
            <Icon type={'CHEVRON-BACK'} stroke={1} />
        </div>
    )
}

export default Component
