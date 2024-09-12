import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck } from "lucide-react"

export default function AuctionsList() {
    return (
        <div className="container mx-auto px-4 py-8 bg-green-50">
            <div className="flex flex-col md:flex-row gap-8">

                <main className="w-full p-5">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-green-800">Auctions</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[...Array(2)].map((_, index) => (
                            <Card key={index} className="overflow-hidden border-green-200 hover:border-green-400 transition-colors">
                                <CardContent className="p-0">
                                    <img
                                        src={`/placeholder.svg?height=200&width=300&text=Product ${index + 1}`}
                                        alt={`Product ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2 text-green-800">Product Name {index + 1}</h2>


                                            <div className="flex items-center text-sm text-white bg-green-600 px-2 py-1 rounded-full w-fit">
                                                <Truck className="h-4 w-4 mr-1" />
                                                <span>Kwara</span>
                                            </div>

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}