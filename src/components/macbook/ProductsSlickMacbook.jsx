import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settingsProductMacbook} from "../../utils/slick";
import CartProduct from "../store/CartProduct";

function ProductsSlickMacbook() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products/macbook")
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
            <Slider {...settingsProductMacbook}>
                {products.map((product) => (
                    <div key={product.id} className="">
                        <CartProduct href={`/products/${product.id}`} product={product}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductsSlickMacbook;
