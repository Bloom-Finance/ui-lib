import React, { useEffect } from 'react'
import styles from './style.module.scss'
//import AOS from 'aos'
import Icon from '../../components/icon'

interface Props {
    show: boolean
    message: string
    onClose: any
    level: 'default' | 'warning' | 'success' | 'error' | any
}

const Component = (props: Props): JSX.Element => {
    useEffect(() => {
        // AOS.init()
        // AOS.refresh()
    }, [])

    return (
        <div>
            {props.show ? (
                <div
                    className={`${styles.alert} ${styles[props.level]} ${
                        props.show
                            ? ' animate__animated animate__fadeIn'
                            : 'animate__animated animate__fadeOut '
                    }`}
                >
                    <p>{props.message}</p>
                    <span onClick={props.onClose}>
                        <Icon type="CLOSE" stroke={1}></Icon>
                    </span>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Component
