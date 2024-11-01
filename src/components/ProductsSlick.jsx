import { ArrowBigLeft, ArrowBigRight, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CartProduct from "./store/CartProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../utils/slick";
import Slider from "react-slick";
function ProductsSlick() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/iphone")
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
            <CartProduct href={`/products/${product.id}`} product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductsSlick;
