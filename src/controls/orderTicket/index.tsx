import React from 'react'
import Label from '../../components/label'
import Container from '../../components/container'
import Icon from '../../components/icon'
import Button from '../../components/button'

interface Props {
    status: 'completed' | 'pending' | 'cancelled'

    icon?: any
    footer?: JSX.Element

    currencyAmount?: string
    currencyDescription?: string
    currencyType?: string
    description?: string
    ticketDate?: number
    ticketNumber?: string
    criptoAmount?: string
    criptoIcon?: any
    user?: string
    walletIcon?: any
    idWallet?: string
}

const Component = (props: Props): JSX.Element => {
    const getColor = () => {
        switch (props.status) {
            case 'completed':
                return 'bg-green-600'
            case 'pending':
                return 'bg-red-500'
            case 'cancelled':
                return 'bg-red-500'
        }
    }
    return (
        <div className="mx-4 my-4 bg-white">
            <div
                className={` ${
                    props.status === 'completed' &&
                    'bg-green-600 rounded-t-lg  p-4'
                } 
                ${
                    props.status === 'cancelled' &&
                    'bg-red-600 rounded-t-lg  p-4'
                }`}
            >
                <div className="h-12 m-auto">
                    {props.status === 'cancelled' && (
                        <Icon
                            type={'X-CIRCLE'}
                            stroke={1}
                            className="m-auto h-12"
                            color="white"
                        />
                    )}
                    {props.status === 'completed' && (
                        <Icon
                            type={'SUCCESS'}
                            stroke={1}
                            className="m-auto h-12"
                            color="white"
                        />
                    )}
                </div>

                <Label align="center" color="white">
                    {props.status === 'completed' &&
                        ` Payment received successfully`}
                    {props.status === 'cancelled' &&
                        `The order has been cancelled`}
                </Label>
                <Label type="small" color="white">
                    {props.status === 'completed' && `Receipt number `}
                    {props.ticketNumber}
                </Label>
                <Label type="small" color="white">
                    {props.status === 'completed' && `Payed on`}
                    {props.status === 'cancelled' && `Order date`}
                    {props.ticketDate}
                </Label>
            </div>
            <div className=" rounded-lg">
                <Container type={'row'} justify={'strech'}>
                    <Label color="gray-400">{props.currencyDescription}</Label>
                    <Container type="column" justify={'center'}>
                        <Label color="gray-700" type="xl">
                            {props.criptoAmount}
                        </Label>
                        {props.criptoIcon}
                    </Container>

                    <div className=" mx-auto items-center  flex justify-center">
                        <Label color="gray-400">{props.currencyAmount}</Label>
                        <span className="text-gray-400 pl-2">
                            {props.currencyType}
                        </span>
                    </div>
                </Container>
                <div className="border-gray-100  border-t p-4">
                    <Label>{props.description}</Label>
                </div>
                {props.status === 'completed' ? (
                    <div className={`border-gray-100  border-t py-4`}>
                        <Label color="gray-500">
                            You received this payment in your wallet
                        </Label>
                        <div className="container px-8  mx-auto items-center flex justify-center">
                            {props.walletIcon}

                            <Label align="left" className="font-bold pl-2">
                                {props.idWallet}
                            </Label>
                        </div>
                    </div>
                ) : (
                    ''
                )}

                <div className="border-gray-100 border-dashed border-t ">
                    <div className="w-6 h-6 absolute rounded-full bg-gray-100 -mt-3   float-right left-2"></div>
                    <div className="w-6 h-6 absolute rounded-full bg-gray-100 -mt-3  float-right right-2"></div>
                    <Container type="row" justify={'strech'}>
                        {props.status === 'completed' ? (
                            <Button
                                label="Download Receippt"
                                className="mt-4 mb-4"
                                icon={<Icon type="DOWNLOAD" stroke={2} />}
                            />
                        ) : (
                            ''
                        )}
                        {props.footer}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Component
