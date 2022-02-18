import React from 'react'
import Label from '../../components/label'
import Container from '../../components/container'
import Icon from '../../components/icon'
import Button from '../../components/button'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'
import moment from 'moment'

interface Props {
    status: 'completed' | 'pending' | 'cancelled'
    icon?: any
    footer?: JSX.Element
    currencyAmount?: number
    currencyDescription?: string
    currencyType?: 'USD' | 'ARS'
    description?: string
    ticketDate?: number
    ticketNumber?: string
    criptoAmount?: number
    criptoIcon?: any
    walletIcon?: any
    walletAddress?: string
}

export const Component = ({
    status = 'completed',
    currencyAmount = 0,
    currencyDescription = 'USD',
    currencyType = 'USD',
    description = '',
    ticketDate = new Date().getTime(),
    ticketNumber = '',
    criptoAmount = 0,
    criptoIcon = null,
    walletIcon = null,
    walletAddress = '',
    footer = <></>
}: Props): JSX.Element => {
    const getColor = () => {
        switch (status) {
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
                    status === 'completed' && 'bg-green-600 rounded-t-lg  p-4'
                } 
                ${status === 'cancelled' && 'bg-red-600 rounded-t-lg  p-4'}`}
            >
                <div className="h-12 m-auto">
                    {status === 'cancelled' && (
                        <Icon
                            type={'X-CIRCLE'}
                            stroke={1}
                            className="m-auto h-12"
                            color="white"
                        />
                    )}
                    {status === 'completed' && (
                        <Icon
                            type={'SUCCESS'}
                            stroke={1}
                            className="m-auto h-12"
                            color="white"
                        />
                    )}
                </div>

                <Label align="center" color="white">
                    {status === 'completed' && ` Payment received successfully`}
                    {status === 'cancelled' && `The order has been cancelled`}
                </Label>
                <Label type="small" color="white">
                    {status === 'completed' && `Receipt number `}
                    {ticketNumber}
                </Label>
                <Label type="small" color="white">
                    {status === 'completed' && `Payed on `}
                    {status === 'cancelled' && `Order date `}
                    {moment(ticketDate).format(
                        FormatterManager.getFormatDate()
                    )}
                </Label>
            </div>
            <div className=" rounded-lg">
                <Container type={'row'} justify={'strech'}>
                    <Label color="gray-400">{currencyDescription}</Label>
                    <Container type="column" justify={'center'}>
                        <Label color="gray-700" type="xl">
                            {criptoAmount}
                        </Label>
                        {criptoIcon}
                    </Container>

                    <div className=" mx-auto items-center  flex justify-center">
                        <Label color="gray-400">
                            {FormatterManager.formatCurrency(
                                currencyAmount as number,
                                currencyType as string
                            )}
                        </Label>
                    </div>
                </Container>
                <div className="border-gray-100  border-t p-4">
                    <Label>{description}</Label>
                </div>
                {status === 'completed' ? (
                    <div className={`border-gray-100  border-t py-4`}>
                        <Label color="gray-500">
                            You received this payment in your wallet
                        </Label>
                        <div className="container px-8  mx-auto items-center flex justify-center">
                            {walletIcon}

                            <Label align="left" className="font-bold pl-2">
                                {walletAddress}
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
                        {status === 'completed' ? (
                            <Button
                                label="Download Receippt"
                                icon={<Icon type="DOWNLOAD" stroke={2} />}
                            />
                        ) : (
                            ''
                        )}
                        {footer}
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Component
