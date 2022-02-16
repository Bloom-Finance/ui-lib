/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRouter } from 'next/router'
import { UsersManager } from '../../../../../services/users.service'
import WalletConnection from '../../wallet/walletConnection'
import Moralis from 'moralis/types'
import StateStore from '../../../../../store/state.store'
import { setToken, encodeToken, getToken } from '../../../../../services/auth.service'
export const BottomPanelLogin: React.FC = () => {
    const router = useRouter()
    const userManager = new UsersManager()
    const connect = (user: Moralis.User<Moralis.Attributes>) => {
        const wallet_address = user.attributes.accounts[0]
        StateStore.update(s => {
            s.loading = true
        })
        userManager
            .get(wallet_address)
            .then(async user => {
                if (user && user.merchants) {
                    StateStore.update(s => {
                        s.loading = false
                    })
                    const userToken = {
                        ...user,
                        merchants: [
                            {
                                role: user.merchants[0].role,
                                merchant: user.merchants[0].merchant.id
                            }
                        ]
                    }
                    const token = encodeToken(userToken)
                    setToken(token)
                    router.push('/dashboard')
                } else {
                    router.push('/profile/create/business')
                }
            })
            .catch(err => {
                throw new Error(err.message)
            })
    }
    const errorHandler = (err: Error) => {
        console.error(err.message)
    }
    return (
        <div>
            <div className="drawer ">
                <div className="fixed bottom-0 w-full">
                    <ul className="menu py-6 px-8 w-full text-base-content rounded-tl-xl rounded-tr-xl shadow-2xl bg-white">
                        <li>
                            <WalletConnection
                                successfullyConnected={connect}
                                handleError={errorHandler}
                            >
                                <div className="border border-gray-300 rounded-lg p-4 cursor-pointer text-lg font-semibold w-full flex items-center justify-center">
                                    <span className="mr-3">
                                        <LogoButton />
                                    </span>
                                    Continue with WalletConnect
                                </div>
                            </WalletConnection>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const LogoButton = () => (
    <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_147_2712)">
            <path
                d="M5.86789 7.37401C9.78177 3.542 16.1274 3.542 20.0413 7.37401L20.5124 7.8352C20.7081 8.0268 20.7081 8.33745 20.5124 8.52905L18.901 10.1067C18.8032 10.2025 18.6445 10.2025 18.5467 10.1067L17.8985 9.47204C15.168 6.79873 10.7412 6.79873 8.01073 9.47204L7.31655 10.1517C7.21871 10.2475 7.06006 10.2475 6.96222 10.1517L5.35088 8.57406C5.15518 8.38246 5.15518 8.07181 5.35088 7.88021L5.86789 7.37401ZM23.3737 10.6367L24.8078 12.0408C25.0035 12.2324 25.0035 12.5431 24.8078 12.7347L18.3414 19.066C18.1457 19.2576 17.8284 19.2576 17.6327 19.066C17.6327 19.066 17.6327 19.066 17.6327 19.066L13.0432 14.5725C12.9943 14.5246 12.915 14.5246 12.866 14.5725C12.866 14.5725 12.866 14.5725 12.866 14.5725L8.27666 19.066C8.08097 19.2576 7.76368 19.2576 7.56799 19.066C7.56799 19.066 7.56798 19.066 7.56798 19.066L1.10136 12.7346C0.905666 12.543 0.905666 12.2324 1.10136 12.0408L2.53546 10.6367C2.73115 10.4451 3.04844 10.4451 3.24413 10.6367L7.83369 15.1302C7.88261 15.1781 7.96193 15.1781 8.01085 15.1302C8.01085 15.1302 8.01085 15.1302 8.01086 15.1302L12.6002 10.6367C12.7959 10.445 13.1132 10.445 13.3089 10.6366C13.3089 10.6366 13.3089 10.6366 13.3089 10.6366L17.8984 15.1302C17.9473 15.1781 18.0267 15.1781 18.0756 15.1302L22.6651 10.6367C22.8607 10.4451 23.178 10.4451 23.3737 10.6367Z"
                fill="#3B99FC"
            />
        </g>
        <defs>
            <clipPath id="clip0_147_2712">
                <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.95459)"
                />
            </clipPath>
        </defs>
    </svg>
)
