import React from 'react'
import CurrencySelectorItem from '../currencySelectorItem'
import { ethers } from 'ethers'
import Divider from '../../components/divider'
import Image from 'next/image'
import styles from './style.module.scss'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'

interface Props {
    walletBalance: Array<any>
    order: Order
}

const Component = (props: Props): JSX.Element => {
    const orderAmount = props.order.items
        .map(i => i.amount)
        .reduce((acc, val) => (acc += val), 0)

    console.log(props.walletBalance)
    return (
        <div className={styles.currencySelector}>
            <div className={styles.contentBody}>
                <p>{props.order.items.map(i => i.description).join(' ')}</p>
                <h3>
                    {FormatterManager.formatCurrency(
                        orderAmount,
                        props.order.merchant.bussiness_currency
                    )}
                </h3>
            </div>
            <Divider simple={false} />

            <div className={styles.contentBody}>
                <div>Select a currency from your balance:</div>
                {props.walletBalance.map(wb => (
                    <div key={wb.token_address} className={styles.card}>
                        <CurrencySelectorItem
                            key={wb.token_address}
                            cryptoSymbol={wb.symbol}
                            cryptoIcon={<div></div>}
                            cryptoName={wb.name}
                            cryptoAmount={ethers.utils.formatUnits(
                                wb.balance,
                                wb.decimals
                            )}
                            fiatAmount={12345}
                            fiatSymbol={
                                props.order
                                    ? props.order?.merchant.bussiness_currency
                                    : 'usd'
                            }
                            tag={
                                wb.kind_of_transaction &&
                                wb.kind_of_transaction === 'FASTER'
                                    ? {
                                          color: 'green',
                                          message: 'Faster transaction'
                                      }
                                    : null
                            }
                        ></CurrencySelectorItem>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Component
