import React, { useState } from 'react'
import CurrencySelectorItem from '../currencySelectorItem'
import { ethers, BigNumber } from 'ethers'
import Divider from '../../components/divider'
import Image from 'next/image'
import styles from './style.module.scss'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import Button from '../../components/button'
import { UICheckout } from '../../../../stores/checkout.store'
import _ from 'lodash'

interface Props {
    walletBalance: Array<any>
    order: Order
    onCurrencySelected: any
}

const Component = (props: Props): JSX.Element => {
    const orderAmount = props.order.items
        .map(i => i.amount)
        .reduce((acc, val) => (acc += val), 0)
    const currencyWithBalance = props.walletBalance.filter(
        wb =>
            orderAmount <=
            Number(ethers.utils.formatUnits(wb.balance, wb.decimals)) *
                wb.usdPrice
    )
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
                {_.isEmpty(currencyWithBalance) && (
                    <div className={styles.balanceEmpty}>
                        You currently don&apos;t have enough balances to make
                        the payment. Fund your wallet or select another payment
                        method.
                    </div>
                )}
                {!_.isEmpty(currencyWithBalance) && (
                    <div>Select a currency from your balance:</div>
                )}
                {props.walletBalance.map(wb => (
                    <div key={wb.token_address} className={styles.card}>
                        <CurrencySelectorItem
                            key={wb}
                            cryptoSymbol={wb.symbol}
                            cryptoIcon={<div></div>}
                            cryptoName={wb.name}
                            disabled={
                                orderAmount >
                                Number(
                                    ethers.utils.formatUnits(
                                        wb.balance,
                                        wb.decimals
                                    )
                                ) *
                                    wb.usdPrice
                            }
                            cryptoAmount={ethers.utils.formatUnits(
                                wb.balance,
                                wb.decimals
                            )}
                            fiatAmount={
                                Number(
                                    ethers.utils.formatUnits(
                                        wb.balance,
                                        wb.decimals
                                    )
                                ) * wb.usdPrice
                            }
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
                            onClick={props.onCurrencySelected}
                        ></CurrencySelectorItem>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Component
