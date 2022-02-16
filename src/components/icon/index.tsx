import React from 'react'

interface Props {
    type:
        | 'CHEVRON-BACK'
        | 'upload'
        | 'MENU'
        | 'CLOCK'
        | 'CHECK'
        | 'DOWNLOAD'
        | 'SEARCH'
        | 'CLOSE'
        | 'SUCCESS'
        | 'X-CIRCLE'
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
        }
    }

    return <div className={props.className}>{getIcon(props.type)}</div>
}

export default Component
