import React from 'react'
import Label from '../../components/label'

interface Props {
    wallet?: string
    idWallet?: string
    walletIcon?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <div className="px-6 py-3 items-center bg-gray-100 flex justify-between">
                <div className="flex items-center gap-x-1">
                    <div>{props.walletIcon}</div>
                    <div className="px-2 py-2 mx-auto items-center grid place-items-strech">
                        <Label color="gray-600" align="left" type="small">
                            {props.wallet}
                        </Label>

                        <Label
                            align="left"
                            type="small"
                            weight="bold"
                            className="text-ellipsis"
                        >
                            {props.idWallet}
                        </Label>
                    </div>
                </div>
                <Label color="error" weight="bold" type="small">
                    Disconnect
                </Label>
            </div>
        </div>
    )
}

export default Component
