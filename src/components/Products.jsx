import {useEffect, useState} from "react";
import CartProduct from "./store/CartProduct";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products/iphone")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.error("Błąd podczas pobierania produktów:", err));
    }, []);


    return (
        <div className="flex justify-center ">
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
