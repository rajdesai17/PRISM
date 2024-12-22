import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IPCard } from "@/components/ip-card"
import { Doughnut } from '@/components/doughnut-chart'

// Mock data for demonstration
const createdAssets = [
  { id: 1, name: "Plot in Green Valley", description: "Residential land plot near the Green Valley park", location: "Green Valley, California", price: 10.0 },
  { id: 2, name: "Modern Apartment", description: "Fully furnished 2 BHK apartment", location: "Downtown, New York", price: 12.0 }
]

const ownedAssets = [
  { id: 3, name: "Beachside Villa", description: "Luxurious villa with private beach access", location: "Malibu, California", price: 15.0 },
  { id: 4, name: "Countryside Cottage", description: "Cozy cottage with scenic countryside views", location: "Lake District, UK", price: 7.0 },
  { id: 5, name: "Jungle House", description: "Luxurious House", location: "Malibu, India", price: 20.0 },]

export default function Dashboard() {
  const totalAssets = createdAssets.length + ownedAssets.length
  const totalValue = [...createdAssets, ...ownedAssets].reduce((sum, asset) => sum + asset.price, 0)

  const chartData = {
    labels: ['Created', 'Owned'],
    datasets: [{
      data: [createdAssets.length, ownedAssets.length],
      backgroundColor: ['#3b82f6', '#10b981'],
    }]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalAssets}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalValue.toFixed(2)} ETH</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Asset Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Doughnut data={chartData} />
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Created Assets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {createdAssets.map(asset => (
              <IPCard key={asset.id} asset={asset} isOwned={true} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Owned Assets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ownedAssets.map(asset => (
              <IPCard key={asset.id} asset={asset} isOwned={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

