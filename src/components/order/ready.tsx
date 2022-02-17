import React from 'react'
import type { NextPage } from 'next'
import Footer from '../footer'
import SimplePage from '../simplePage'
import Header from '../header'
import ButtonBack from '../header/backButton'
import Container from '../container'
import Label from '../label'
import { useRouter } from 'next/router'
import Icon from '../icon'
import QRCode from 'react-qr-code'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Timer from '../timer'

const Page: NextPage = () => {
    const router = useRouter()
    return (
        <Container type="row" justify="center">
            <Label className="px-12">Show this QR code to your customer</Label>
            <QRCode className="mt-8 mb-8" value="https://google.com" />

            <CountdownCircleTimer
                isPlaying
                duration={90}
                size={80}
                strokeWidth={6}
                colors={['#35CD81', '#35CD81', '#35CD81', '#35CD81']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </Container>
    )
}

export default Page
