import {toast} from "react-toastify";
import useCartStore from "../context/cart";
import ButtonBuy from "./UI/ButtonBuy";

export default function BarAction({children, product}) {
    const {addItemToCart} = useCartStore();

    function handleAddToCart() {
        addItemToCart(product);
        toast("✨ Product add to cart ");
    }

    return (
        <div
            className="bg-white common-padding-bar sticky bottom-0 border-t-[1px] border-slate-200 h-20 items-center flex">
            <div className="screen-max-width flex w-full justify-end">
                <div className="flex flex-row w-full justify-between items-center">
                    <p className="text-black text-2xl font-semibold">{children}</p>
                    <ButtonBuy small onClick={handleAddToCart}/>
                </div>
            </div>
        </div>
    );
}
