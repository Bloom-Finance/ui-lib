import React from 'react'
import styles from './style.module.scss'

interface Props {
    label: string
    icon?: JSX.Element
    color: 'green' | 'yellow' | 'red'
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className={styles.tag}>
            <div className={` ${styles[props.color]}`}>
                <span>{props.icon}</span>
                <span>{props.label}</span>
            </div>
        </div>
    )
}

export default Component
