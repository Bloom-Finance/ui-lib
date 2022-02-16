/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { LegacyRef, ChangeEventHandler } from 'react'
interface SelectIconProps {
    label: string
    controller?: {
        onChange: ChangeEventHandler<HTMLSelectElement>
        ref: LegacyRef<HTMLSelectElement>
    }
    placeholder: string
    options: Array<{
        value: string
        label: string
    }>
    disabled?: boolean
    defaultValue?: string
}
const SelectIcon = (props: SelectIconProps) => {
    return (
        <div>
            <div className="form-control w-full max-w-xs mb-8">
                <label className="text-black">
                    <span className="label-text">{props.label}</span>
                </label>
                <select
                    ref={props.controller?.ref}
                    onChange={props.controller?.onChange}
                    placeholder="Select an option"
                    className="select input w-full"
                    disabled={props.disabled}
                    defaultValue={props.defaultValue || ''}
                >
                    <option value={props.defaultValue || ''} disabled>
                        {props.defaultValue || props.placeholder}
                    </option>
                    {props.options.length > 0 &&
                        props.options.map((option, i) => (
                            <option key={i} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    )
}

export default SelectIcon
