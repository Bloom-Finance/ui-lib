import React, { ChangeEventHandler } from "react"

interface Props{
    label: string 
    placeholder?: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    value: any
}

const Component = ({
    label="",
    placeholder= "",
    value="",
    onChange = () => null 
}: Props): JSX.Element => {
    
    return (
        <div>
            <input placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default Component