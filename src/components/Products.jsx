import {useEffect, useState} from "react";
import CartProduct from "./store/CartProduct";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/products/iphone`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.error("Błąd podczas pobierania produktów:", err));
    }, []);


    return (
        <div className="flex justify-center flex-wrap gap-6">
            {products.map((product) => (
                <CartProduct
                    key={product.id}
                    href={`/products/${product.id}`}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Products;
