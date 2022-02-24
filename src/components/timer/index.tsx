import { MouseEventHandler } from 'react'
import React, { FC } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimerProps {
    duration: number
    size?: 80 | 40
    stroke: 1 | 2 | 3 | 4 | 5 | 6
    children?: any
    remainingTime?: number
}
export const Timer = ({
    duration,
    size,
    stroke,
    children,
    remainingTime,
    ...props
}: TimerProps) => {
    let classNameBase = ' '
    classNameBase = classNameBase

    return (
        <CountdownCircleTimer
            isPlaying
            duration={duration}
            size={size}
            strokeWidth={stroke}
            colors={['#35CD81', '#35CD81', '#35CD81', '#35CD81']}
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )
}

export default Timer
