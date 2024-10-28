import {ChevronRight} from "lucide-react";
import React from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useCartStore from "../../context/cart";

function CartProduct({href, product}) {
    const {addItemToCart} = useCartStore();

    function addToCart() {
        addItemToCart(product);
        toast("✨ Product add to cart ");
    }

    return (
        <div className="bg-white rounded-2xl cursor-pointer ">
            <a href={href}>
                <div
                    key={product.id}
                    className="box flex rounded-2xl flex-col gap-4 w-full md:w-[350px] px-10  md:p-4"
                >
                    <div className="img items-center flex justify-center overflow-hidden">
                        <img className="h-[180px] object-contain mt-6" src={product.img}/>
                    </div>
                    <div className="switchs flex justify-center items-center gap-2">
                        <div className="bg-gray-100 w-3 h-3 rounded-full"></div>
                        <div className="bg-slate-400 w-3 h-3 rounded-full"></div>
                        <div className="bg-neutral-600 w-3 h-3 rounded-full"></div>
                        <div className="bg-sky-800 w-3 h-3 rounded-full"></div>
                    </div>
                    <div className="text flex flex-col justify-center  items-center gap-2">
                        <div className="title ">
                            <p className="product-title text-black">{product.title}</p>
                        </div>
                        <div className="desc text-black">
                            <p>{product.desc}</p>
                        </div>
                        <div className="price ">
                            <p className="product-title-price text-black text-xl">
                                {product.price} zł
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            <div className="button flex justify-center items-center gap-8 p-6">
                <a href={href}>
                    <button className="btn">Learn more</button>
                </a>
                <button
                    onClick={addToCart}
                    className="flex items-center justify-center text-black "
                >
                    Buy <ChevronRight size={18}/>
                </button>
            </div>

        </div>
    );
}

export default CartProduct;
