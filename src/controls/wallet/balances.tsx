import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import { WalletManager } from '../../../../core-lib/services/wallet.service'
import { formatCurrency } from '@coingecko/cryptoformat'

interface Props {
    className?: string
}

const Component = (props: Props): JSX.Element => {
    const { Moralis } = useMoralis()
    const contractAddresses = FormatterManager.formatContractAddresses()
    const [balance, setBalance] = useState<Array<any>>([])

    const walletManager = new WalletManager()

    useEffect(() => {
        ;(async () => {
            setBalance((await walletManager.getBalances()) as [])
        })()
    }, [])
    return (
        <div>
            {balance.map(b => (
                <div key={b.token_address} className="flex justify-between">
                    <div>
                        <div>{b.symbol}</div>
                    </div>
                    <div>
                        <div>
                            {formatCurrency(
                                Number(b.balance),
                                b.symbol,
                                'en',
                                false,
                                {
                                    decimalPlaces: Number(b.decimals)
                                }
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Component
