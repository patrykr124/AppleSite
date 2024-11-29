import {ChevronRight} from "lucide-react";

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
        <div
            className="bg-white w-full sm:max-w-[150px] md:max-w-[250px] flex flex-col justify-center items-center rounded-2xl cursor-pointer ">
            <a href={href}>
                <div
                    key={product.id}
                    className="box flex rounded-2xl flex-col gap-4 md:w-[350px] lg:px-10  md:p-4"
                >
                    <div className="img items-center flex justify-center overflow-hidden">
                        <img alt="productImg" className="h-[200px] max-w-[200px] lg:max-w-[250px] object-contain mt-6"
                             src={product.img}/>
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
                        <div className="desc text-black text-center">
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
            <div className="button flex flex-col lg:flex-row  justify-center items-center md:gap-8 gap-4 p-2">
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
