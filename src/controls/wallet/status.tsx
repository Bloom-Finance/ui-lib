import { MouseEventHandler } from 'react'
import React, { FC } from 'react'
import Label from '../../components/label'

interface WalletStatusProps {
    icon?: JSX.Element
    walletAdress?: string
    wallet?: string
    walletLogout?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export const WalletStatus = ({
    wallet = '',
    walletAdress = '',
    icon = <div></div>,
    ...props
}: WalletStatusProps) => {
    let classNameBase =
        'px-6 py-3 items-center bg-gray-100 flex justify-between '
    classNameBase = classNameBase

    return (
        <div>
            <div className={`${classNameBase}`}>
                <div className="flex items-center gap-x-1">
                    <div>{icon}</div>
                    <div className="px-2 py-2 mx-auto items-center grid place-items-strech">
                        <Label color="gray-600" align="left" type="small">
                            {wallet}
                        </Label>

                        <Label
                            align="left"
                            type="small"
                            weight="bold"
                            className="text-ellipsis"
                        >
                            {walletAdress}
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

export default WalletStatus
