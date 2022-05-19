/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface Props {
    type:
        | 'CHEVRON-BACK'
        | 'CLOCK'
        | 'CHECK'
        | 'CHECK-CIRCLE'
        | 'CLOSE'
        | 'DAI'
        | 'DOWNLOAD'
        | 'ETH'
        | 'EXPAND'
        | 'upload'
        | 'MENU'
        | 'metamask'
        | 'SEARCH'
        | 'SUCCESS'
        | 'X-CIRCLE'
        | 'REFRESH'
        | 'REMOVE'
        | 'X'
        | 'USDT'
        | 'ATTACH'

    stroke: 1 | 2 | 3
    color?: string
    className?: string
}

const Component = (props: Props): JSX.Element => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'upload':
                return (
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H13C14.1046 17 15 16.1046 15 15V11M11 1H17M17 1V7M17 1L7 11"
                            stroke={props.color || 'currentColor'}
                            strokeWidth={props.stroke}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )

            case 'CLOSE':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )
            case 'ATTACH':
                return (
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.5 4C6.84315 4 5.5 5.34315 5.5 7V11C5.5 13.7614 7.73858 16 10.5 16C13.2614 16 15.5 13.7614 15.5 11V7C15.5 6.44772 15.9477 6 16.5 6C17.0523 6 17.5 6.44772 17.5 7V11C17.5 14.866 14.366 18 10.5 18C6.63401 18 3.5 14.866 3.5 11V7C3.5 4.23858 5.73858 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7V11C13.5 12.6569 12.1569 14 10.5 14C8.84315 14 7.5 12.6569 7.5 11V7C7.5 6.44772 7.94772 6 8.5 6C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.94772 12 10.5 12C11.0523 12 11.5 11.5523 11.5 11V7C11.5 5.34315 10.1569 4 8.5 4Z"
                            fill="#111827"
                        />
                    </svg>
                )
            case 'EXPAND':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                        strokeWidth={props.stroke}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                    </svg>
                )
            case 'SEARCH':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                )
            case 'CHEVRON-BACK':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                )

            case 'MENU':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )
            case 'CLOCK':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )
            case 'CHECK':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )
            case 'CHECK-CIRCLE':
                return (
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 24L22 28L30 20M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
                            stroke="#F9FAFB"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )
            case 'DOWNLOAD':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                )
            case 'SUCCESS':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={props.className}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )
            case 'metamask':
                return (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_652_5491)">
                            <path
                                d="M21.2454 3.04004L13.6721 8.60689L15.0726 5.32252L21.2454 3.04004Z"
                                fill="#E2761B"
                                stroke="#E2761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.76196 3.04004L11.2744 8.65962L9.94243 5.32252L3.76196 3.04004Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18.5204 15.9438L16.5034 19.0023L20.8191 20.1773L22.0598 16.0117L18.5204 15.9438Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.96277 16.0117L4.19582 20.1773L8.51149 19.0023L6.49446 15.9438L2.96277 16.0117Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.2679 10.7763L7.06531 12.5766L11.3505 12.765L11.1983 8.20752L8.2679 10.7763Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.7395 10.7762L13.7711 8.15479L13.6721 12.7649L17.9497 12.5766L16.7395 10.7762Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.5116 19.0025L11.0843 17.7594L8.86172 16.042L8.5116 19.0025Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.9232 17.7594L16.5035 19.0025L16.1458 16.042L13.9232 17.7594Z"
                                fill="#E4761B"
                                stroke="#E4761B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5035 19.0022L13.9232 17.7593L14.1287 19.4241L14.1059 20.1247L16.5035 19.0022Z"
                                fill="#D7C1B3"
                                stroke="#D7C1B3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.5116 19.0022L10.9092 20.1247L10.894 19.4241L11.0843 17.7593L8.5116 19.0022Z"
                                fill="#D7C1B3"
                                stroke="#D7C1B3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.9472 14.9421L8.80078 14.3169L10.3155 13.6313L10.9472 14.9421Z"
                                fill="#233447"
                                stroke="#233447"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.0602 14.9421L14.6919 13.6313L16.2142 14.3169L14.0602 14.9421Z"
                                fill="#233447"
                                stroke="#233447"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.51152 19.0022L8.87688 15.9438L6.49451 16.0116L8.51152 19.0022Z"
                                fill="#CD6116"
                                stroke="#CD6116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.1382 15.9438L16.5035 19.0022L18.5205 16.0116L16.1382 15.9438Z"
                                fill="#CD6116"
                                stroke="#CD6116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.9497 12.5767L13.6721 12.765L14.0679 14.942L14.6997 13.6313L16.2219 14.3168L17.9497 12.5767Z"
                                fill="#CD6116"
                                stroke="#CD6116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.8007 14.3168L10.323 13.6313L10.9471 14.942L11.3505 12.765L7.06531 12.5767L8.8007 14.3168Z"
                                fill="#CD6116"
                                stroke="#CD6116"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.06531 12.5767L8.8616 16.0419L8.8007 14.3168L7.06531 12.5767Z"
                                fill="#E4751F"
                                stroke="#E4751F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.2219 14.3168L16.1458 16.0419L17.9496 12.5767L16.2219 14.3168Z"
                                fill="#E4751F"
                                stroke="#E4751F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.3506 12.7651L10.9471 14.9422L11.4495 17.5109L11.5637 14.1286L11.3506 12.7651Z"
                                fill="#E4751F"
                                stroke="#E4751F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.6721 12.7651L13.4666 14.1211L13.5579 17.5109L14.0679 14.9422L13.6721 12.7651Z"
                                fill="#E4751F"
                                stroke="#E4751F"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.0678 14.9421L13.5579 17.5108L13.9232 17.7595L16.1458 16.042L16.2219 14.3169L14.0678 14.9421Z"
                                fill="#F6851B"
                                stroke="#F6851B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.80078 14.3169L8.86167 16.042L11.0842 17.7595L11.4495 17.5108L10.9472 14.9421L8.80078 14.3169Z"
                                fill="#F6851B"
                                stroke="#F6851B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.106 20.1248L14.1288 19.4242L13.9385 19.2584H11.069L10.894 19.4242L10.9092 20.1248L8.5116 19.0024L9.34885 19.6804L11.0462 20.8479H13.9614L15.6663 19.6804L16.5036 19.0024L14.106 20.1248Z"
                                fill="#C0AD9E"
                                stroke="#C0AD9E"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.9233 17.7594L13.5579 17.5107H11.4496L11.0842 17.7594L10.8939 19.4242L11.069 19.2584H13.9385L14.1288 19.4242L13.9233 17.7594Z"
                                fill="#161616"
                                stroke="#161616"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21.5652 8.96847L22.212 5.89503L21.2454 3.04004L13.9232 8.41857L16.7394 10.7764L20.7203 11.9289L21.6031 10.912L21.2226 10.6408L21.8314 10.0909L21.3595 9.7293L21.9685 9.2698L21.5652 8.96847Z"
                                fill="#763D16"
                                stroke="#763D16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.80298 5.89503L3.44995 8.96847L3.03893 9.2698L3.64785 9.7293L3.18354 10.0909L3.79246 10.6408L3.4119 10.912L4.28721 11.9289L8.26797 10.7764L11.0842 8.41857L3.76202 3.04004L2.80298 5.89503Z"
                                fill="#763D16"
                                stroke="#763D16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.7203 11.9289L16.7394 10.7764L17.9496 12.5767L16.1458 16.0419L18.5205 16.0117H22.0598L20.7203 11.9289Z"
                                fill="#F6851B"
                                stroke="#F6851B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.26792 10.7764L4.28716 11.9289L2.96277 16.0117H6.49446L8.86161 16.0419L7.06532 12.5767L8.26792 10.7764Z"
                                fill="#F6851B"
                                stroke="#F6851B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.6721 12.7648L13.9233 8.41831L15.0802 5.32227H9.9425L11.0842 8.41831L11.3506 12.7648L11.4419 14.1358L11.4496 17.5106H13.5579L13.5732 14.1358L13.6721 12.7648Z"
                                fill="#F6851B"
                                stroke="#F6851B"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_652_5491">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                )
            case 'X-CIRCLE':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={props.className}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )
            case 'X':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )
            case 'ETH':
                return (
                    <img
                        src="https://cdn.moralis.io/eth/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"
                        alt="Ethereum logo"
                        className="h-6 w-6"
                    />
                )
            case 'DAI':
                return (
                    <img
                        className="h-6 w-6"
                        src="https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png"
                        alt="DAI logo"
                    />
                )
            case 'USDT':
                return (
                    <img
                        className="h-6 w-6"
                        src="https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
                        alt="USDT logo"
                    />
                )
            case 'REFRESH':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={props.className}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={props.color || 'currentColor'}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={props.stroke}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </svg>
                )
        }
    }

    return <div className={props.className}>{getIcon(props.type)}</div>
}

export default Component
