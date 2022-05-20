import React from 'react'
import Tag from '../../components/tag'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import styles from './style.module.scss'
import Image from 'next/image'
interface Props {
    key?: string
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
}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            {props.tag && (
                <Tag label={props.tag.message} color={props.tag.color}></Tag>
            )}
            <div key={props.key} className={styles.card}>
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
