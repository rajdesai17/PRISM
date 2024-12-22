import { IPCard } from "@/components/ip-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Mock data for demonstration
const listedAssets = [
  { id: 1, name: "Plot in Green Valley", description: "Residential land plot near the Green Valley park", location: "Green Valley, California", price: 10.0 },
  { id: 2, name: "Modern Apartment", description: "Fully furnished 2 BHK apartment", location: "Downtown, New York", price: 12.0 },
  { id: 3, name: "Beachside Villa", description: "Luxurious villa with private beach access", location: "Malibu, California", price: 15.0 },
  { id: 4, name: "Countryside Cottage", description: "Cozy cottage with scenic countryside views", location: "Lake District, UK", price: 7.0 },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Marketplace</h2>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 max-w-sm">
          <Input type="search" placeholder="Search assets..." />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listedAssets.map(asset => (
          <IPCard key={asset.id} asset={asset} isOwned={false} />
        ))}
      </div>
    </div>
  )
}

