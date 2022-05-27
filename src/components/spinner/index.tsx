import React from 'react'
import style from './style.module.scss'

interface Props {}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <div className={style.ldsripple}>
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
