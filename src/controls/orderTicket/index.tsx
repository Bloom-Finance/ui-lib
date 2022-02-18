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
        <div className="mx-4 my-4 bg-white rounded-t-lg text-center ">
            <div
                className={` ${
                    status === 'completed' && 'bg-green-600 rounded-t-lg  p-4'
                } 
                ${status === 'cancelled' && 'bg-red-600 rounded-t-lg  p-4'} ${
                    status === 'pending' && 'bg-yellow-600 rounded-t-lg  p-4'
                }`}
            >
                <div className="h-12 m-auto text-center">
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
                    {status === 'pending' && (
                        <Icon
                            type={'X'}
                            stroke={1}
                            className="m-auto h-12"
                            color="white"
                        />
                    )}
                </div>

                <div className="text-center text-white text-base font-semibold">
                    {status === 'completed' && ` Payment received successfully`}
                    {status === 'pending' && ` The order has been Pending `}
                    {status === 'cancelled' && `The order has been cancelled`}
                </div>
                <div className="text-sm text-white text-center">
                    {status === 'completed' && `Receipt number `}
                    {ticketNumber}
                </div>
                <div className="text-sm text-white text-center">
                    {status === 'completed' && `Payed on `}
                    {status === 'cancelled' && `Order date `}
                    {moment(ticketDate).format(
                        FormatterManager.getFormatDate()
                    )}
                </div>
            </div>
            <div className=" rounded-lg">
                <Container type={'row'} justify={'strech'}>
                    <div className="text-base text-gray-400 text-center">
                        {currencyDescription}
                    </div>
                    <div className="container px-8 py-2 mx-auto items-center undefined flex justify-center">
                        <div className="text-xl text-gray-700 text-center">
                            {criptoAmount}
                        </div>
                        {criptoIcon}
                    </div>

                    <div className=" mx-auto items-center  flex justify-center">
                        <div className="text-sm text-center text-gray-400 ">
                            {FormatterManager.formatCurrency(
                                currencyAmount as number,
                                currencyType as string
                            )}
                        </div>
                    </div>
                </Container>
                <div className="border-gray-100  border-t p-4">
                    <div className="text-base text-regular text-gray-900">
                        {description}
                    </div>
                </div>
                {status === 'completed' ? (
                    <div className={`border-gray-100  border-t py-4`}>
                        <div className="text-sm text-gray-400 px-4">
                            You received this payment in your wallet
                        </div>
                        <div className="container px-8  mx-auto items-center flex justify-center">
                            {walletIcon}

                            <div className="text-sm text-regular text-gray-900 px-4">
                                {walletAddress}
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {status === 'completed' ? (
                    <div className="border-t border-dashed">
                        <Container type="row" justify={'strech'}>
                            <Button
                                label="Download Receippt"
                                icon={<Icon type="DOWNLOAD" stroke={2} />}
                            />
                        </Container>
                    </div>
                ) : (
                    ''
                )}

                {footer}
            </div>
        </div>
    )
}

export default Component
