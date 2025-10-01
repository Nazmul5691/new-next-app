import Image from "next/image";
import { IProduct } from "../../../type";

export default function ProductCart({ product }: { product: IProduct }) {
    return (
        <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Product Image */}
            <div className="relative w-full h-44">
                <Image
                    src={product.image}
                    alt={product.product_name}
                    height={250}
                    width={300}
                    className="w-full h-full object-cover"
                />
                {/* Category Tag */}
                <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-lg">
                    {product.category}
                </span>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{product.product_name}</h2>
                <p className="text-sm text-gray-500">Brand: {product.brand}</p>

                <p className="text-xl font-semibold text-blue-600 mt-2">${product.price}</p>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                        See Details
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}