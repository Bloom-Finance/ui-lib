import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis'
import { getToken } from '../../services/auth.service'
import Loader from '../loader/index'
import StateStore from '../../store/state.store'
import Moralis from 'moralis'
interface IWalletGuard {
    children: React.ReactNode
    verifiedUserData?: (
        user: Moralis.User<Moralis.Attributes> | null,
        token: string
    ) => void
}
const WalletGuard = ({ children, verifiedUserData }: IWalletGuard) => {
    const { isAuthenticated, isInitialized, user } = useMoralis()
    const loading = StateStore.useState(s => s.loading)
    const router = useRouter()
    useEffect(() => {
        if (isInitialized) {
            const token = getToken()
            if (isAuthenticated || token) {
                StateStore.update(s => {
                    s.loading = false
                })
                if (verifiedUserData) verifiedUserData(user, token)
            } else {
                StateStore.update(s => {
                    s.loading = false
                })
                router.replace('/')
            }
        }
    }, [isInitialized])

    if (loading) {
        return <Loader />
    }
    return <>{children}</>
}

export default WalletGuard
