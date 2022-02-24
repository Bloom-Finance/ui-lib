/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import router from 'next/router'
import React from 'react'
import Icon from '../../components/icon'
import AuthUser from '../authUser'
import WalletStatus from '../../controls/wallet/status'
interface Props {
    walletAddress: string
}
const DrawerMenu = (props: Props): JSX.Element => {
    return (
        <div className=" drawer h-auto ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className=" drawer-content">
                <label htmlFor="my-drawer">
                    <div className="">
                        <Icon type="MENU" stroke={2} />
                    </div>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay  "></label>
                <ul className="menu overflow-y-auto w-10/12 left-0 bg-base-100 text-base-content h-screen absolute top-0 ">
                    <li>
                        <WalletStatus
                            wallet="Wallet Connect"
                            walletAddress={props.walletAddress}
                        />
                    </li>
                    <li className="pt-4 px-1">
                        <a>
                            <span className="mr-3">
                                <SettingsIcon />
                            </span>
                            Account settings
                        </a>
                    </li>
                    <li className="px-1">
                        <a
                            onClick={() => {
                                router.push('/profile/logout')
                            }}
                        >
                            <span className="mr-3">
                                <LogoutIcon />
                            </span>
                            Logout
                        </a>
                    </li>
                    <li>
                        <a>
                            <label htmlFor="my-drawer" className="w-full">
                                <label className="mr-3">
                                    <CloseIcon />
                                </label>
                                Close menu
                            </label>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerMenu

const SettingsIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8.32463 2.31731C8.75103 0.560897 11.249 0.560897 11.6754 2.31731C11.9508 3.45193 13.2507 3.99038 14.2478 3.38285C15.7913 2.44239 17.5576 4.2087 16.6172 5.75218C16.0096 6.74925 16.5481 8.04918 17.6827 8.32463C19.4391 8.75103 19.4391 11.249 17.6827 11.6754C16.5481 11.9508 16.0096 13.2507 16.6172 14.2478C17.5576 15.7913 15.7913 17.5576 14.2478 16.6172C13.2507 16.0096 11.9508 16.5481 11.6754 17.6827C11.249 19.4391 8.75103 19.4391 8.32463 17.6827C8.04918 16.5481 6.74926 16.0096 5.75219 16.6172C4.2087 17.5576 2.44239 15.7913 3.38285 14.2478C3.99038 13.2507 3.45193 11.9508 2.31731 11.6754C0.560897 11.249 0.560897 8.75103 2.31731 8.32463C3.45193 8.04918 3.99037 6.74926 3.38285 5.75218C2.44239 4.2087 4.2087 2.44239 5.75219 3.38285C6.74926 3.99037 8.04918 3.45193 8.32463 2.31731Z"
            stroke="#747373"
        />
        <path
            d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
            stroke="#747373"
        />
    </svg>
)

const LogoutIcon = () => (
    <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15 13L19 9M19 9L15 5M19 9L5 9M11 13V14C11 15.6569 9.65686 17 8 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H8C9.65686 1 11 2.34315 11 4V5"
            stroke="#747373"
        />
    </svg>
)

const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current text-error"
    >
        <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
)
