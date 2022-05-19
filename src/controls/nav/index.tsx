import React from 'react'
import Icon from '../../components/icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from './style.module.scss'

interface Props {
    label: string
    route: string
    merchantLogo: string
}

const Component = (props: Props): JSX.Element => {
    const router = useRouter()
    return (
        <div className={style.main}>
            <header>
                <div
                    className="flex items-center"
                    onClick={() => router.push(props.route)}
                >
                    <Icon stroke={1} type="CHEVRON-BACK" className=""></Icon>
                    <span>{props.label}</span>
                </div>
                <div>
                    <img src={props.merchantLogo} />
                </div>
            </header>
        </div>
    )
}

export default Component
