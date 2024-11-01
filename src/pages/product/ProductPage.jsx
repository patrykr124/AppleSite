import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductPageIphone from "./ProductPageIphone";
import ProductPageMacbook from "./ProductPageMacbook";
import useFetchProductID from "../../context/products";

function ProductPage() {
  const { id } = useParams();
  const { fetchProduct, product,  } = useFetchProductID(
    (state) => ({
      product: state.product,
      fetchProduct: state.fetchProduct,
 
    })
  );

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

 

  return (
    <>
      {product?.slug === "macbook" ? (
        <ProductPageMacbook />
      ) : (
        <ProductPageIphone />
      )}
    </>
  );
}

export default ProductPage;
