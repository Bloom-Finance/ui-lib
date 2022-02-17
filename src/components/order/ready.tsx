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
            <Label className="px-12 pt-2" color="gray-500">Show this QR code to your customer</Label>
            <QRCode className="mt-4 mb-16" value="https://google.com" />

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
            <div className="flex justify-center pt-8">
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
                    <Icon className="pr-2" type="upload" stroke={1}></Icon>
                    <div>Share Link</div>
                </div>
            </div>
        </Container>
    )
}

export default Page
