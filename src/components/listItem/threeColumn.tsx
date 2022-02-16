import React from 'react'
import Label from '../label'
import Container from '../container'

interface Props {
    column1?: any
    column2?: any
    column3?: any
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="container mx-auto items-center grid-cols-5 gap-3  grid place-items-strech">
            <div>{props.column1}</div>

            <div className=" col-span-2">
                <Label align="left"> {props.column2}</Label>
            </div>
            <div className="col-span-2">
                <Label align="right"> {props.column3}</Label>
            </div>
        </div>
    )
}

export default Component
