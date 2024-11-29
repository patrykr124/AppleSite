import { ArrowBigLeft, ArrowBigRight, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CartProduct from "../store/CartProduct";

function ProductsMacbook() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/products/macbook`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Błąd podczas pobierania produktów:", err));
  }, []);

  return (
    <div className="flex justify-center lg:justify-start flex-wrap gap-6 ">
      {products.map((product) => (
        <CartProduct href={`/products/${product.id}`} product={product} />
      ))}
    </div>
  );
}

export default ProductsMacbook;
