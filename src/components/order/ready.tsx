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

interface ReadyProps {
    footer?: any
}
const ReadyProps = (props: ReadyProps) => {
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
            <Container type="row" justify="center">
                <div
                    className="flex"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: 'Sample test',
                                url: 'google.com'
                            })
                        }
                    }}
                >
                    <Icon className="pr-4" type="upload" stroke={1}></Icon>
                    <div>Share Link</div>
                </div>
            </Container>

            <Footer>{props.footer}</Footer>
        </Container>
    )
}

export default ReadyProps
