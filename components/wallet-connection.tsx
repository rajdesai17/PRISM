"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function WalletConnection() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')

  const connectWallet = async () => {
    // if (typeof window.ethereum !== 'undefined') {
    //   try {
    //     await window.ethereum.request({ method: 'eth_requestAccounts' })
    //     const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    //     setAddress(accounts[0])
    //     setIsConnected(true)
    //   } catch (error) {
    //     console.error('Failed to connect wallet:', error)
    //   }
    // } else {
    //   alert('Please install MetaMask!')
    // }
  }

  return (
    <div>
      {isConnected ? (
        <p className="text-sm">Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
      ) : (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      )}
    </div>
  )
}

