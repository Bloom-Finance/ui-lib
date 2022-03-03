/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEventHandler, LegacyRef } from 'react'
interface InputTextProps {
    label?: string
    placeholder: string
    error?: any
    autofocus?: boolean
    className?: any
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
/**
 * @description Styled input type text component
 * @param label Label to be shown in the upper area
 * @param placeholder Default placeholder to show inside input
 * @param onChange  !IMPORTANT to properly work the input
 * @param value  !IMPORTANT to properly be working
 */
const InputText = (props: InputTextProps) => {
    return (
        <div className="w-full">
            <div className="form-control mb-4">
                {props.label && (
                    <label className=" text-black">
                        <span className="label-text text-sm">
                            {props.label}
                        </span>
                    </label>
                )}
                <input
                    onChange={props.onChange}
                    value={props.value}
                    type="text"
                    autoFocus={props.autofocus}
                    placeholder={props.placeholder}
                    className={`input ${
                        props.label && 'input-border-b text-gray-600'
                    } ${'text-red-600 input-border-b border-red-600 '} `}
                />
            </div>
        </div>
    )
}
export default InputText
