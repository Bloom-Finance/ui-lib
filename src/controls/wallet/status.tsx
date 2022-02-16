import React from 'react'
import Container from '../../components/container'
import Label from '../../components/label'

interface Props {
    wallet?: string
    idWallet?: string
    walletIcon?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <div className="container p-4 mx-auto items-center bg-gray-100 flex justify-strech">
                <div>{props.walletIcon}</div>
                <div className="container px-2 py-2 mx-auto items-center grid place-items-strech">
                    <Label color="gray-600" align="left">
                        {props.wallet}
                    </Label>

                    <Label align="left" className="font-bold text-ellipsis">
                        {props.idWallet}
                    </Label>
                </div>

                <Label color="error" className="font-bold">
                    Disconect
                </Label>
            </div>
        </div>
    )
}

export default Component
