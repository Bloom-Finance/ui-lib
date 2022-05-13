import React from 'react'
import styles from './styles.module.scss'

interface Props {
    simple: boolean
}

const Component = (props: Props): JSX.Element => {
    if (props.simple) return <div className={styles.divider} />

    return (
        <div className="flex bg-white justify-between">
            <div className={styles.circleLeft} />
            <hr className={styles.dashed} />
            <div className={styles.circleRigth} />
        </div>
    )
}

export default Component
