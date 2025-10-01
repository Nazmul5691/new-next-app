import ProductCart from "@/components/products/ProductCart";
import { IProduct } from "../../../../type";

export default async function ProductPage() {
    const res = await fetch('http://localhost:5000/products', {
        // cache: "force-cache"
        cache: "no-store"

        // next: {
        //     revalidate: 30,
        // }

        //  next: {
        //     tags: ["products"]
        // }
    })
    const products = await res.json();

    console.log(products);

    return (
        <div>
            <h1>This is ProductPage</h1>
            <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto">
                {
                    products.map((product: IProduct) => (
                        <ProductCart key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}