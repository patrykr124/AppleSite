import React, {useEffect, useState} from "react";
import CartProduct from "./store/CartProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from "../utils/slick";
import Slider from "react-slick";

function ProductsSlick() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/products/iphone`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => console.error("Błąd podczas pobierania produktów:", err));
    }, []);

    return (
        <div className="">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="">
                        <div className="flex justify-center">
                            <CartProduct href={`/products/${product.id}`} product={product}/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductsSlick;
