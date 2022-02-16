import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface Props {
    duration: number
    size?: 80
    stroke: 1 | 2 | 3 | 4 | 5 | 6
    children?: any
    remainingTime?: number
}

const Component = (props: Props): JSX.Element => {
    return (
        <CountdownCircleTimer
            isPlaying
            duration={props.duration}
            size={props.size}
            strokeWidth={props.stroke}
            colors={['#35CD81', '#35CD81', '#35CD81', '#35CD81']}
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )
}

export default Component
