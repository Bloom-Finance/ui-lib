import React from 'react'

interface Props {}

const Component = (props: Props): JSX.Element => {
    return (
        <header>
            <div>
                <Icon
                    stroke={1}
                    type="CHEVRON-BACK"
                    className="absolute left-4 top-10 -translate-y-1/2"
                ></Icon>
            </div>
            <div>
                <img
                    src={order.merchant.company_logo}
                    alt={order.merchant.company}
                    className="block w-48 m-auto mb-6"
                />
            </div>
        </header>
    )
}

export default Component
