import React from 'react'
import style from './style.module.scss'

interface Props {
    size?: 'large' | 'small' | null
}
const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <div
                className={
                    props.size && props.size === 'small'
                        ? style.ldsrippleSmall
                        : style.ldsripple
                }
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Component
