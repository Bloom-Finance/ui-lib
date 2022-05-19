import React from 'react'

interface Props {
    order: Order
    payment: Payment | null
}

const Component = (props: Props): JSX.Element => {
    return (
        <div className="rounded-full bg-black">
            <section className=" p-4">
                <h3>Thank you for your payment</h3>
                <p>Receipt number #910201</p>
                <p>Payed on 12/12/2021</p>
            </section>
        </div>
    )
}

export default Component
