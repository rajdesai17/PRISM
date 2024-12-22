import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Tokenize Your Intellectual Property
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Secure, trade, and monetize your ideas on the blockchain. Join the future of digital asset management.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/create">
                <Button className="bg-white text-black hover:bg-gray-200">Create IP Token</Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Why Choose Our Platform?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  We offer a seamless experience for creators and investors alike. Discover the benefits of our IP marketplace.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Shield className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold text-black">Secure</h3>
                <p className="text-sm text-gray-500 text-center">
                  Your intellectual property is protected by blockchain technology
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Zap className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold text-black">Fast</h3>
                <p className="text-sm text-gray-500 text-center">
                  Tokenize and trade your IP assets with lightning speed
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Globe className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold text-black">Global</h3>
                <p className="text-sm text-gray-500 text-center">
                  Access a worldwide market of creators and investors
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/dashboard">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

