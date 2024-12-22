"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Asset {
  id: number
  name: string
  description: string
  price: number
}

interface IPCardProps {
  asset: Asset
  isOwned: boolean
}

export function IPCard({ asset, isOwned }: IPCardProps) {
  const [isListed, setIsListed] = useState(false)
  const [price, setPrice] = useState(asset.price.toString())

  const handleList = () => {
    // Here you would typically call a smart contract function to list the asset
    setIsListed(true)
  }

  const handleUnlist = () => {
    // Here you would typically call a smart contract function to unlist the asset
    setIsListed(false)
  }

  const handleBuy = () => {
    // Here you would typically call a smart contract function to buy the asset
    alert(`Buying ${asset.name} for ${asset.price} ETH`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{asset.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{asset.description}</p>
        <p className="mt-2 font-bold">{asset.price} ETH</p>
      </CardContent>
      <CardFooter>
        {isOwned ? (
          isListed ? (
            <Button onClick={handleUnlist}>Unlist</Button>
          ) : (
            <div className="flex space-x-2">
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price in ETH"
              />
              <Button onClick={handleList}>List</Button>
            </div>
          )
        ) : (
          <Button onClick={handleBuy}>Buy</Button>
        )}
      </CardFooter>
    </Card>
  )
}

