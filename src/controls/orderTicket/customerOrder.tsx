import React, { useState } from 'react'
import { WalletManager } from '../../../../core-lib/services/wallet.service'
import WalletStatus from '../wallet/status'
import Container from '../../components/container'
import moment from 'moment'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import _ from 'lodash'
import Input from '../../components/input'
import { useMoralis } from 'react-moralis'

interface Props {
    companyName: string
    items: Array<{
        description: string
        amount: number
        currency: string
    }>
    orderNumber: string
    date: number
}

const Component = ({
    companyName = '',
    orderNumber = '',
    items = [],
    date = new Date().getTime()
}: Props): JSX.Element => {
    const walletService = new WalletManager()
    const [email,setEmail] = useState('')
    const {user}  = useMoralis()
    return (
        <div>
            <Container type="row">
               { user?.isCurrent &&  <WalletStatus
                    idWallet={walletService.getAddressCurrentUser()}
                />}
                <div>{companyName}</div>
                <div className="flex justify-between">
                    <div>{`Order #${orderNumber}`}</div>
                    <div>
                        {moment(date).format(FormatterManager.getFormatDate())}
                    </div>
                </div>
                <div>
                    {items.map((item, index) => (
                        <div
                            key={`index${index}`}
                            className="flex justify-between"
                        >
                            <div>{item.description}</div>
                            <div>
                                {FormatterManager.formatCurrency(
                                    item.amount,
                                    item.currency
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div>Total</div>
                    <div>
                        {FormatterManager.formatCurrency(
                            items.reduce((val, acc) => acc.amount + val, 0),
                            _.head(items)?.currency || 'USD'
                        )}
                    </div>
                </div>

                <Input label='Get the receipt' placeholder='Enter email address' onChange={e => setEmail(e.target.value)} value={email}  />

                
            </Container>
        </div>
    )
}

export default Component
