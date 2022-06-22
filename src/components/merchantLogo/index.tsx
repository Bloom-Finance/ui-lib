import React from 'react'

interface Props {}

const Component = (props: Props): JSX.Element => {
    return (
        <div>
            <img
                src={(order.merchant as Merchant).company_logo}
                alt={(order.merchant as Merchant).company}
                className="block w-48 m-auto mb-6"
            />
        </div>
    )
}

export default Component
