import React, { ChangeEventHandler, LegacyRef } from 'react'

interface Props {
    className?: string
    children?: any
    label?: string
    placeholder?: string
    currency?: string
    controller: {
        onChange: ChangeEventHandler<HTMLInputElement>
        ref: LegacyRef<HTMLInputElement>
    }
}

const InputCurrency = (props: Props): JSX.Element => {
    return (
        <div className={`${props.className}`}>
            <div className="stat place-items-center place-content-center">
                <div className="stat-value flex font-normal ">
                    <input
                        type="number"
                        ref={props.controller?.ref}
                        onChange={props.controller?.onChange}
                        className="w-5/6 text-center"
                        placeholder={props.placeholder}
                    ></input>
                    <span className=" text-gray-500">{props.currency}</span>
                </div>
            </div>
        </div>
    )
}

export default InputCurrency
