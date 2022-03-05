import React from 'react'
import { useMoralis } from 'react-moralis'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import { WalletManager } from '../../../../core-lib/services/wallet.service'
import Label from '../../components/label'

interface Props {
    wallet?: string
    walletIcon?: string
    walletAddress?: string
    onLogout: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <div className="px-6 py-3 items-center bg-gray-100 flex justify-between">
                <div className="flex items-center gap-x-1">
                    <img className="h-10 w-10" src={props.walletIcon} />
                    <div className="px-2 py-2 mx-auto items-center grid place-items-strech">
                        <Label color="gray-600" align="left" type="small">
                            {props.wallet}
                        </Label>

                        <div className="flex">
                            <Label
                                align="left"
                                type="small"
                                weight="bold"
                                className="text-ellipsis"
                            >
                                {FormatterManager.formatWalletAddress(
                                    props.walletAddress as string
                                )}
                            </Label>
                        </div>
                    </div>
                </div>
                <Label
                    color="error"
                    weight="bold"
                    type="small"
                    onClick={async () => props.onLogout()}
                >
                    Disconnect
                </Label>
            </div>
        </div>
    )
}

export default Component
