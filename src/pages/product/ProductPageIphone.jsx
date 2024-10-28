import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarAction from "../../components/BarAction";
import ProductsSlick from "../../components/ProductsSlick";
import Capacity from "../../components/store/Capacity";
import Inch from "../../components/store/Inch";
import Package from "../../components/store/Package";
import useCartStore from "../../context/cart";
import useFetchProductID from "../../context/products";

function ProductPageIphone() {
  const fetchProduct = useFetchProductID((state) => state.fetchProduct);
  const product = useFetchProductID((state) => state.product);

  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  return (
    <>
      <section className="w-screen h-full common-padding bg-white">
        <div className="screen-max-width">
          {product && (
            <div className="flex flex-[3] flex-col gap-4">
              <h1 className="section-heading-offanima">{product.title}</h1>
              <p className="text-black">{product.desc}</p>
              <p className="text-black text-3xl mb-10 font-semibold ">
                {product.price} zł
              </p>
            </div>
          )}

          <div className="details flex flex-col lg:flex-row gap-10 relative ">
            <div
                className="left lg:sticky top-[25%] inset-0 max-h-[500px] overflow-hidden rounded-2xl  flex-[3] flex bg-grayProduct justify-center">
              <img
                  className="rounded-2xl object-cover"
                  src={product?.imgStore}
                  alt={product?.title}
              />
            </div>
            <div className="right flex-1 flex flex-col text-black gap-10">
              <Capacity/>
              <Inch/>
            </div>
          </div>
          <Package/>
          <div className="allProducts mt-20 ">
          <div className="flex justify-center">
              <h3 className="text-black product-title max-w-sm">
                Your new iPhone. And so much more.
              </h3>
            </div>
            <div className="mt-10">
              <ProductsSlick />
            </div>
          </div>
        </div>
      </section>
      <BarAction product={product}>{product?.title}</BarAction>
    </>
  );
}

export default ProductPageIphone;