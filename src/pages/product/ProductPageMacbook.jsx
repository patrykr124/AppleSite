import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PackageMacbook from "../../components/store/PackageMacbook";
import CapacityMacbook from "../../components/store/CapacityMacbook";
import ProductsSlickMacbook from "../../components/macbook/ProductsSlickMacbook";
import BarAction from "../../components/BarAction.jsx";
import useFetchProductID from "../../context/products.js";
import useCartStore from "../../context/cart.js";

function ProductPageMacbook() {
    const fetchProduct = useFetchProductID((state) => state.fetchProduct);
    const product = useFetchProductID((state) => state.product);
    const {priceSelected} = useCartStore();
    const {id} = useParams();
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        fetchProduct(id);
    }, [id, fetchProduct]);


    return (
        <>
            <section className="w-screen h-full common-padding bg-white">
                <div className="screen-max-width">
                    {product && (
                        <div className="flex flex-col gap-4">
                            <h1 className="section-heading-offanima">{product?.title}</h1>
                            <p className="text-black">{product?.desc}</p>
                            <p className="text-black/60 mb-10 font-semibold">
                                {priceSelected} zł
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
                            <CapacityMacbook setSelected={setSelected} selected={selected} product={product}/>
                        </div>
                    </div>
                    <PackageMacbook/>
                    <div className="allProducts mt-20 ">
                        <div className="flex justify-center">
                            <h3 className="text-black product-title max-w-sm">
                                Your new Macbook. And so much more.
                            </h3>
                        </div>
                        <div className="mt-10">
                            <ProductsSlickMacbook/>
                        </div>
                    </div>
                </div>

            </section>
            <BarAction selected={selected} product={product}>{product?.title}</BarAction>
        </>
    );
}

export default ProductPageMacbook;
