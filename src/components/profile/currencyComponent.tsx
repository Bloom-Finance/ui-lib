import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MerchantManager } from '../../services/merchant.service'
import { UsersManager } from '../../services/users.service'
import { WalletManager } from '../../services/wallet.service'
import { useMoralis } from 'react-moralis'
import MerchantStore from '../../store/merchant.store'
import WalletGuard from '../wallet/walletGuard'
import SelectIcon from '../select/selectIcon'
import Header from '../componentPages/login/header'
import { BloomWeb3, Merchant } from '../../type'
import { FormatterManager } from '../../common/helpers/formatter'
import { Controller, useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
interface CurrencyProps {
    update: boolean
}
interface Token {
    value: string
    label: string
    symbol: string
}
interface FormatedChain {
    type: BloomWeb3['chains']
    label: string
}
interface Metadata {
    address: string
    name: string
    symbol: string
    decimals: string
    logo?: string | undefined
    logo_hash?: string | undefined
    thumbnail?: string | undefined
    block_number?: string | undefined
    validated?: string | undefined
}
const CurrencyComponent = (props: CurrencyProps) => {
    const state = MerchantStore.useState(s => {
        return s
    })
    const router = useRouter()
    const merchantManager = new MerchantManager()
    const usersManager = new UsersManager()
    const walletManager = new WalletManager()
    const { Moralis, user, logout } = useMoralis()

    //Tokens to be showed in select
    const [tokens, setTokens] = useState<Array<Token>>([])
    //Extended information of tokens received from Moralis API
    const [tokensMetadata, setTokensMatadata] = useState<Array<Metadata>>()
    const getTokens = async (received_chain: string) => {
        const chain_addresses = checkChainAddresses(received_chain)
        const metadata = await Moralis.Web3API.token.getTokenMetadata({
            chain: chain.type,
            addresses: chain_addresses
        })
        setTokensMatadata(metadata)
        return metadata
    }
    //Contract addresses of available tokens
    const contractAddresses = FormatterManager.formatContractAddresses()
    const userAddress = user?.attributes.accounts[0]
    //Default selected chain in walletconnect proccess
    const [chain] = useState<FormatedChain>(() => {
        if (walletManager.connected || walletManager.activeProvider) {
            return walletManager.getCurrentChainId()
        } else {
            return {
                type: 'eth',
                label: 'Ethereum'
            }
        }
    })
    const {
        control,
        handleSubmit,
        formState: { isValid, isDirty }
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            chain: chain.label,
            cryptocurrency: state.withdrawalAddress.contract
        }
    })
    const checkChainAddresses = (selected_chain: string) => {
        const filtered_addreses = contractAddresses.filter(v => {
            if (v.chain === selected_chain) {
                return v.addresses
            }
        })
        return filtered_addreses[0].addresses
    }
    useEffect(() => {
        if (walletManager.connected || props.update) {
            const tmp: Array<Token> = []
            getTokens(chain?.type)
                .then(t => {
                    t?.forEach(v => {
                        tmp.push({
                            value: v.address,
                            label: v.name,
                            symbol: v.symbol
                        })
                    })
                    setTokens(tmp)
                })
                .catch(err => console.error(err))
        } else {
            walletManager.LogOut(logout)
            router.replace('/')
        }
    }, [])
    const getSelectedCoin = (address: string) => {
        return tokensMetadata?.filter(v => v.address === address)
    }
    const manageContractOpts = () => {
        return tokens.filter(
            token => token.label !== state.withdrawalAddress.name
        )
    }
    const onSubmit = async (data: any) => {
        const selectedToken = getSelectedCoin(data.cryptocurrency)?.shift()
        const merchantToSave: Merchant = {
            withdrawalAddress: {
                chain: chain.type,
                contract:
                    selectedToken?.symbol === 'ETH'
                        ? 'native'
                        : data.cryptocurrency,
                name: selectedToken?.name || ''
            },
            bussiness_currency: state.bussiness_currency,
            company: state.company,
            company_logo: state.company_logo || '',
            id: !props.update ? nanoid() : state.id
        }
        try {
            if (!props.update) {
                await merchantManager.register(merchantToSave)
                await usersManager.register(
                    { wallet_id: userAddress },
                    merchantToSave,
                    'ADMIN'
                )
            } else {
                await merchantManager.update(merchantToSave)
            }
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <WalletGuard>
            <form
                className="container mx-auto px-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Header label="Select a cryptocurrency to receive payments" />
                <Controller
                    name="chain"
                    control={control}
                    render={({ field }) => {
                        return (
                            <SelectIcon
                                controller={field}
                                label="Network"
                                disabled={true}
                                defaultValue={chain.label}
                                placeholder="Select an specific network"
                                options={[
                                    { value: 'eth', label: 'Ethereum' },
                                    {
                                        value: 'bsc',
                                        label: 'Binance smart chain'
                                    },
                                    { value: 'polygon', label: 'Polygon' },
                                    {
                                        value: 'avalanche',
                                        label: 'Avalanche'
                                    },
                                    { value: 'fantom', label: 'Fantom' }
                                ]}
                            />
                        )
                    }}
                ></Controller>

                <Controller
                    name="cryptocurrency"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => {
                        return (
                            <SelectIcon
                                disabled={
                                    chain || tokens?.length > 0 ? false : true
                                }
                                controller={field}
                                defaultValue={state.withdrawalAddress.name}
                                label=" Cryptocurrency"
                                placeholder="Select cryptocurrency"
                                options={
                                    !props.update
                                        ? tokens || [
                                              {
                                                  value: 'eth',
                                                  label: 'ethereum'
                                              }
                                          ]
                                        : manageContractOpts()
                                }
                            />
                        )
                    }}
                ></Controller>
                <button
                    className="btn btn-primary capitalize btn-block mt-8"
                    disabled={!isValid || !isDirty}
                    type="submit"
                >
                    Finish
                </button>
            </form>
        </WalletGuard>
    )
}

export default CurrencyComponent
