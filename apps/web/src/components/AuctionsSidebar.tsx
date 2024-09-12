import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function AuctionsSidebar() {
    return (
        <aside className="w-full md:w-1/4">
            <div className="space-y-6 bg-white p-4 rounded-lg shadow">
                <div>
                    <h3 className="font-semibold mb-2 text-green-800">Categories</h3>
                    <ul className="space-y-2">
                        <li>
                            <Checkbox id="category1"/>
                            <label htmlFor="category1" className="ml-2 text-sm text-green-700">Electronics</label>
                        </li>
                        <li>
                            <Checkbox id="category2"/>
                            <label htmlFor="category2" className="ml-2 text-sm text-green-700">Clothing</label>
                        </li>
                        <li>
                            <Checkbox id="category3"/>
                            <label htmlFor="category3" className="ml-2 text-sm text-green-700">Home & Garden</label>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-green-800">Price Range</h3>
                    <div className="flex items-center space-x-2">
                        <Input type="number" placeholder="Min"
                               className="w-20 border-green-300 focus:border-green-500"/>
                        <span className="text-green-700">-</span>
                        <Input type="number" placeholder="Max"
                               className="w-20 border-green-300 focus:border-green-500"/>
                        <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                            Go
                        </Button>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-green-800">Condition</h3>
                    <ul className="space-y-2">
                        <li>
                            <Checkbox id="condition1"/>
                            <label htmlFor="condition1" className="ml-2 text-sm text-green-700">New</label>
                        </li>
                        <li>
                            <Checkbox id="condition2"/>
                            <label htmlFor="condition2" className="ml-2 text-sm text-green-700">Used</label>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}