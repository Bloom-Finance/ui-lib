import React from 'react'
import styles from './style.module.scss'
import Divider from '../../components/divider'
import moment from 'moment'
import { formatCurrency } from '@coingecko/cryptoformat'
import Icon from '../../components/icon'
import Button from '../../components/button'
import WalletStatus from '../wallet/status'

interface Props {
    order: Order
    payment?: Payment | null
}

const Component = (props: Props): JSX.Element => {
    const HeaderSuccess = () => {
        return (
            <section className={styles.headerSuccess}>
                <Icon
                    type={'CHECK-CIRCLE'}
                    stroke={1}
                    className={styles.statusIcon}
                ></Icon>
                <h2>Thank you for your payment</h2>
                <p>{`Receipt number #${props.order.id}`}</p>
                <p>{`Payed on ${moment(props.payment?.date).format('LLL')}`}</p>
            </section>
        )
    }
    const HeaderInReview = () => {
        return (
            <section className={styles.headerInReview}>
                <Icon
                    type={'CLOCK'}
                    stroke={1}
                    className={styles.statusIcon}
                ></Icon>
                <h2>We&apos;re reviewing your payment</h2>
                <p>
                    Thank you for your patience! You&apos;ll be contacted by our
                    team shortly.
                </p>
            </section>
        )
    }
    const HeaderInProcess = () => {
        return (
            <section className={styles.headerInReview}>
                {/* <WalletStatus
                    walletAddress={wm.getAddressCurrentUser()}
                    walletIcon={wm.getWalletIcon()}
                    onLogout={() => console.log('logout')}
                ></WalletStatus> */}
                <Icon
                    type={'CLOCK'}
                    stroke={1}
                    className={styles.statusIcon}
                ></Icon>
                <h2>Your payment is on the blockchain</h2>
                <p>
                    Check the status below for more context. We&apos;ll let you
                    know via email.
                </p>
            </section>
        )
    }
    const HeaderCancelled = () => {
        return (
            <section className={styles.headerCancelled}>
                <Icon
                    type={'X-CIRCLE'}
                    stroke={1}
                    className={styles.statusIcon}
                ></Icon>
                <h2>Order cancelled</h2>
                <p>
                    An error ocurred and your order has been cancelled.
                    You&apos;ll be contacted by our team shortly.
                </p>
            </section>
        )
    }
    const HeaderFailed = () => {
        return (
            <section className={styles.headerFailed}>
                <Icon
                    type={'X-CIRCLE'}
                    stroke={1}
                    className={styles.statusIcon}
                ></Icon>
                <h2>The payment failed</h2>
                <p>
                    It seems something went wrong with Stripe. Please, try
                    again.
                </p>
            </section>
        )
    }
    return (
        <div className={styles.card}>
            <div className={styles.orderTicket}>
                {props.order.status === 'PAYED' && (
                    <HeaderSuccess></HeaderSuccess>
                )}
                {props.order.status === 'IN REVIEW' && (
                    <HeaderInReview></HeaderInReview>
                )}
                {props.order.status === 'IN PROCESS' && (
                    <HeaderInProcess></HeaderInProcess>
                )}
                {props.order.status === 'CANCELLED' && (
                    <HeaderCancelled></HeaderCancelled>
                )}
                {props.order.status === 'FAILED' && (
                    <HeaderFailed></HeaderFailed>
                )}
                <section className={styles.contentBody}>
                    <p>{props.order.items.map(o => o.description).join(' ')}</p>
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
                    {props.order.status === 'IN PROCESS' && (
                        <span>0.3042 BTC</span>
                    )}
                </section>
                {props.order.status === 'IN REVIEW' && (
                    <div>
                        <Divider simple={false} />
                        <section className={styles.contentFooter}>
                            <span>Status:</span>
                            <p>
                                Our team is reviewing your proof of payment and
                                checking the bank wire.
                            </p>
                        </section>
                    </div>
                )}
                {props.order.status === 'IN PROCESS' && (
                    <div>
                        <Divider simple={false} />
                        <section className={styles.contentFooter}>
                            <span>Status:</span>
                            <p>
                                The payment is on the Bitcoin blockchain, and
                                two more blocks are pending. We estimate it will
                                be fully processed in 4 min.
                            </p>
                        </section>
                    </div>
                )}
                {props.order.status === 'PAYED' && (
                    <div>
                        <Divider simple={false} />
                        <section className={styles.contentFooter}>
                            <Button
                                label={'Download receipt'}
                                size={'small'}
                            ></Button>
                        </section>
                    </div>
                )}
                {props.order.status === 'FAILED' && (
                    <div>
                        <Divider simple={false} />
                        <section className={styles.contentFooter}>
                            <Button label={'Retry'} size={'small'}></Button>
                            <Button
                                label={'Cancel order'}
                                size={'small'}
                                type={'warning'}
                            ></Button>
                        </section>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Component
