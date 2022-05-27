import React, { useEffect } from 'react'
import styles from './style.module.scss'
import AOS from 'aos'

interface Props {
    show: boolean
    message: string
    onClose: any
    level: 'default' | 'warning' | 'success' | 'error' | any
}

const Component = (props: Props): JSX.Element => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <>
            {props.show ? (
                <div
                    className={styles.alert}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <p>{props.message}</p>
                    <span onClick={props.onClose}>Close</span>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default Component
