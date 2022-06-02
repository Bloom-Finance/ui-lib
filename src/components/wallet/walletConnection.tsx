/* eslint-disable @typescript-eslint/ban-types */
import WalletConnectProvider from '@walletconnect/web3-provider'
import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { WalletManager } from '../../../../core-lib/services/wallet.service'
import Button from '../button'
import Spinner from '../spinner'
import style from './style.module.scss'
interface activeProvider {
    provider?: WalletConnectProvider
}
interface WalletAuthProps {
    signatureMessage?: string
    successfullyConnected: (user: any) => void
    handleError: (err: Error) => void
    children?: React.ReactNode
}
const WalletAuth = (props: WalletAuthProps) => {
    const {
        authenticate,
        isAuthenticated,
        logout: MoralisLogOut,
        enableWeb3,
        isWeb3Enabled,
        Moralis,
        isAuthenticating
    } = useMoralis()
    const activeProvider = Moralis.Web3.activeWeb3Provider as activeProvider
    const walletAuthentication = async () => {
        await authenticate({
            provider: 'walletconnect',
            signingMessage: props.signatureMessage || 'Bloom Authentication',
            onSuccess: user => props.successfullyConnected(user),
            onError: err => props.handleError(err)
        })
    }
    const isBrowser = () => typeof window !== 'undefined'
    if (isBrowser()) {
        document.addEventListener('visibilitychange', () => {
            //May bring future conflicts
            if (document.visibilityState === 'hidden') {
                window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE')
            }
        })
    }

    useEffect(() => {
        if (!isWeb3Enabled && isAuthenticated) {
            enableWeb3({ provider: 'walletconnect' })
        }
    }, [isWeb3Enabled, isAuthenticated, enableWeb3])
    if (isAuthenticating) {
        return (
            <div className={style.connectionStatus}>
                <Spinner></Spinner>
                <span>Go to your wallet and accept the connection</span>
            </div>
        )
    }
    if (activeProvider) {
        const walletManager = new WalletManager()
        walletManager.onDisconnect(isAuthenticated, MoralisLogOut)
    }
    return (
        <div>
            <Button
                label="Crypto"
                type="tonal"
                size="small"
                className="payWithCrypto"
                onClick={walletAuthentication}
            ></Button>
        </div>
    )
}

export default WalletAuth
