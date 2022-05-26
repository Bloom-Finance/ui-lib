import React, { MouseEventHandler } from 'react'
import Tag from '../../components/tag'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import styles from './style.module.scss'
import Image from 'next/image'
import { UICheckout } from '../../../../stores/checkout.store'
interface Props {
    key?: any
    cryptoSymbol: string
    cryptoIcon: JSX.Element
    cryptoName: string
    cryptoAmount: string
    fiatSymbol: string
    fiatAmount: number
    tag?: {
        color: 'green' | 'red' | 'yellow'
        message: string
    } | null
    onClick?: any
}

const Component = (props: Props): JSX.Element => {
    const currencySelected = UICheckout.useState(s => s.currencySelected)
    return (
        <div
            onClick={() => {
                props.onClick && props.onClick(props.cryptoSymbol)
            }}
        >
            {props.tag && (
                <Tag label={props.tag.message} color={props.tag.color}></Tag>
            )}
            <div
                key={props.cryptoSymbol}
                className={`${styles.main} ${
                    props && props.cryptoSymbol === currencySelected?.symbol
                        ? styles.selected
                        : styles.unSelected
                }`}
            >
                <section>
                    <div className="flex items-center">
                        <div className={styles.imageBox}>
                            <Image
                                src={`/assets/crypto-coins/${props.cryptoSymbol.toLowerCase()}.svg`}
                                width={24}
                                height={24}
                                alt={props.cryptoSymbol}
                            />
                        </div>
                        <div>
                            <div>{props.cryptoName}</div>
                            <div>{props.cryptoSymbol}</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        {FormatterManager.formatCurrency(
                            props.fiatAmount,
                            props.fiatSymbol
                        )}
                    </div>
                    <div>{` ${props.cryptoAmount.substring(0, 9)}`}</div>
                </section>
            </div>
        </div>
    )
}

export default Component
