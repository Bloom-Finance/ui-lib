import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMoralis } from 'react-moralis'
import { getToken } from '../../../../core-lib/services/auth.service'
import Loader from '../loader/index'

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
    
    const router = useRouter()
    useEffect(() => {
        if (isInitialized) {
            const token = getToken()
            if (isAuthenticated || token) {
               
                if (verifiedUserData) verifiedUserData(user, token)
            } else {
                
                router.replace('/')
            }
        }
    }, [isInitialized])

   
    return <>{children}</>
}

export default WalletGuard
