import React from 'react'

interface Props {
    body: string
}

export const Text = ({ body }: any) => {
    return <p>{body}</p>
}

export default Text
