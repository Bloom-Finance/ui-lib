import { Children, MouseEventHandler } from 'react'
import React, { FC } from 'react'
import style from './style.module.scss'
import Spinner from '../spinner'

interface LoaderProps {
    title?: string
}
export const Loader = ({ title, ...props }: LoaderProps) => {
    return (
        <div className={style.loader}>
            <section>
                <Spinner></Spinner>
                <p>Loading</p>
            </section>
        </div>
    )
}

export default Loader
