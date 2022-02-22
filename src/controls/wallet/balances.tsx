import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { FormatterManager } from "../../../../core-lib/common/helpers/formatter"
import { WalletManager } from "../../../../core-lib/services/wallet.service"

interface Props{}

const Component = (props: Props): JSX.Element => {
    const {Moralis} = useMoralis()

    const contractAddresses = FormatterManager.formatContractAddresses()
    const walletManager = new WalletManager()

    
    
    const checkChainAddresses = (selected_chain: string) => {
        const filtered_addreses = contractAddresses.filter(v => {
            if (v.chain === selected_chain) {
                return v.addresses
            }
        })
        return filtered_addreses[0].addresses
    }

    useEffect(() => {
        (async() => {
           
            if (walletManager.activeProvider) {
                const metadata = await Moralis.Web3API.token.getTokenMetadata({
                    chain: walletManager.getCurrentChainId().type,
                    addresses: checkChainAddresses(walletManager.getCurrentChainId().type)
                })
    
                console.log(metadata)
    
                console.log(await Moralis.Web3API.account.getTokenBalances({
                    chain: walletManager.getCurrentChainId().type,
                   address: walletManager.getAddressCurrentUser()
                }))
    
            }
            
        })()
    },[])

    return (
        <div>Balances</div>
    )
}

export default Component