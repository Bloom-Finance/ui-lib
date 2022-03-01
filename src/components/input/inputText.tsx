/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEventHandler, LegacyRef } from 'react'
interface InputTextProps {
    label?: string
    placeholder: string
    error?: any
    autofocus?: boolean
    controller?: {
        onChange: ChangeEventHandler<HTMLInputElement>
        ref: LegacyRef<HTMLInputElement>
    }
    defaultValue?: string
    className?: any
}
/**
 * @description Styled input type text component
 * @param label Label to be shown in the upper area
 * @param placeholder Default placeholder to show inside input
 * @param controller  !IMPORTANT to connect with react-hook forms
 * @param defaultValue  Optional param to set a value by default
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
                    defaultValue={props.defaultValue || ''}
                    ref={props.controller?.ref}
                    onChange={props.controller?.onChange}
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
