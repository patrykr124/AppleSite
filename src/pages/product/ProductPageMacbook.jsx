import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PackageMacbook from "../../components/store/PackageMacbook";
import InchMacbook from "../../components/store/InchMacbook";
import CapacityMacbook from "../../components/store/CapacityMacbook";
import ProductsSlickMacbook from "../../components/macbook/ProductsSlickMacbook";
import BarAction from "../../components/BarAction.jsx";

function ProductPageMacbook() {
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((err) => console.error("Błąd podczas pobierania produktu:", err));
    }, [id]);


    return (
        <>
            <section className="w-screen h-full common-padding bg-white">
                <div className="screen-max-width">
                    {product && (
                        <div className="flex flex-col gap-4">
                            <h1 className="section-heading-offanima">{product?.title}</h1>
                            <p className="text-black">{product?.desc}</p>
                            <p className="text-black/60 mb-10 font-semibold">
                                {product?.price} zł
                            </p>
                        </div>
                    )}
                    <div className="details flex flex-col lg:flex-row gap-10 relative ">
                        <div
                            className="left lg:sticky top-[25%] inset-0 max-h-[500px] overflow-hidden rounded-2xl  flex-[3] flex bg-grayProduct justify-center">
                            <img
                                className="rounded-2xl  object-cover"
                                src={product?.imgStore}
                                alt={product?.title}
                            />
                        </div>
                        <div className="right flex-1 flex flex-col text-black gap-10">
                            <CapacityMacbook/>
                            <InchMacbook/>
                        </div>
                    </div>
                    <PackageMacbook/>
                    <div className="allProducts mt-20 ">
                        <div className="flex justify-center">
                            <h3 className="text-black product-title max-w-sm">
                                Your new iPhone. And so much more.
                            </h3>
                        </div>
                        <div className="mt-10">
                            <ProductsSlickMacbook/>
                        </div>
                    </div>
                </div>

            </section>
            <BarAction product={product}>{product?.title}</BarAction>
        </>
    );
}

export default ProductPageMacbook;
