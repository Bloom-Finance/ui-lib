import React from 'react'
import styles from './style.module.scss'
import Divider from '../../components/divider'
import moment from 'moment'
import { formatCurrency } from '@coingecko/cryptoformat'

interface Props {
    order: Order
    payment?: Payment | null
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className="w-full">
                <section className={styles.headerSuccess}>
                    <div className="flex w-full justify-center py-6">
                        <IconClock />
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
                    <div>Payed with credit card using</div>
                    <sub>Stripe</sub>
                </section>
            </div>
        </div>
    )
}

export default Component

const IconClock = () => (
    <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 19L17 23L25 15M37 19C37 28.9411 28.9411 37 19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 37 9.05887 37 19Z"
            stroke="#F9FAFB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
