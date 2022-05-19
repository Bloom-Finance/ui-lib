import React from 'react'
import styles from './style.module.scss'
import Divider from '../../components/divider'
import moment from 'moment'
import { formatCurrency } from '@coingecko/cryptoformat'
import Icon from '../../components/icon'

interface Props {
    order: Order
    payment?: Payment | null
}

const Component = (props: Props): JSX.Element => {
    const HeaderSuccess = () => {
        return (
            <section className={styles.headerSuccess}>
                <div className="flex w-full justify-center py-6">
                    <Icon type={'CHECK'} stroke={1}></Icon>
                </div>
                <p>Thank you for your payment</p>
                <div>
                    <sub>{`Receipt number #${props.order.id}`} </sub>
                </div>
                <div>
                    <sub>{`Payed on ${moment(props.payment?.date).format(
                        'LLL'
                    )}`}</sub>
                </div>
            </section>
        )
    }
    const HeaderInReview = () => {
        return (
            <section className={styles.headerInReview}>
                <div className="flex w-full justify-center py-6">
                    <Icon type={'CLOCK'} stroke={1}></Icon>
                </div>
                <p>We&apos;re reviewing your payment</p>
                <p>
                    Thank you for your patience! You&apos;ll be contacted by our
                    team shortly.
                </p>
            </section>
        )
    }
    return (
        <div className={styles.card}>
            <div className="w-full">
                {props.order.status === 'PAYED' && (
                    <HeaderSuccess></HeaderSuccess>
                )}
                {props.order.status === 'IN REVIEW' && (
                    <HeaderInReview></HeaderInReview>
                )}
                <section className={styles.contentBody}>
                    <h2>{props.order.merchant.company}</h2>
                    <b>
                        {`${formatCurrency(
                            props.order.items
                                .map(i => i.amount)
                                .reduce(
                                    (prev, curr) => Number(prev) + Number(curr),
                                    0
                                ),
                            'usd'
                        )}`}
                    </b>
                </section>
                <Divider simple />

                <section className={styles.contentItems}>
                    <p>{props.order.items.map(o => o.description).join(' ')}</p>
                </section>
                <Divider simple={false} />

                <section className={styles.contentFooter}>
                    <div>delete</div>
                </section>
            </div>
        </div>
    )
}

export default Component
