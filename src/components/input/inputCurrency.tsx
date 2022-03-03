import React, { ChangeEventHandler, LegacyRef } from 'react'

interface Props {
    className?: string
    children?: any
    label?: string
    placeholder?: string
    currency?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    value: number
}
const InputCurrency = (props: Props): JSX.Element => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-x-3">
                <input
                    type="number"
                    defaultValue={props.value <= 0 ? '' : props.value}
                    onChange={props.onChange}
                    className="text-center w-12 min-w-24 text-4xl font-semibold text-gray-900 placeholder:text-gray-900"
                    placeholder={props.placeholder}
                ></input>
                <span className="text-4xl text-gray-400">{props.currency}</span>
            </div>
        </div>
    )
}

export default InputCurrency
