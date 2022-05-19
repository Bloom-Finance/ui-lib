import React from 'react'
import Tag from '../../components/tag'
import { FormatterManager } from '../../../../core-lib/common/helpers/formatter'

interface Props {
    key?: string
    cryptoSymbol: string
    cryptoIcon: JSX.Element
    cryptoName: string
    cryptoAmount: string
    fiatSymbol: string
    fiatAmount: number
}

const Component = (props: Props): JSX.Element => {
    return (
        <div key={props.key}>
            <Tag label="Fastest transaction" color="green"></Tag>
            <p>{props.cryptoSymbol}</p>
            <p>{props.cryptoIcon}</p>
            <p>{props.cryptoName}</p>
            <p>{props.cryptoAmount}</p>
            <p>
                {FormatterManager.formatCurrency(
                    props.fiatAmount,
                    props.fiatSymbol
                )}
            </p>
        </div>
    )
}

export default Component
