import {toast} from "react-toastify";
import useCartStore from "../context/cart";
import ButtonBuy from "./UI/ButtonBuy";
import {useEffect} from "react";

export default function BarAction({children, product, selected}) {
    const {addItemToCart, setPriceSelected, priceSelected} = useCartStore();

    function handleAddToCart() {
        addItemToCart(product);
        toast("✨ Product add to cart ");
    }


    useEffect(() => {

        if (product && product.options?.length && product.options[selected]) {
            const additional = Number(product?.options[selected].additionalPrice) || 0;
            const price = Number(product?.price);
            setPriceSelected(additional + price);
        } else {
            const price = Number(product?.price);
            setPriceSelected(price);
        }
    }, [selected, product, setPriceSelected]);


    return (
        <div
            className="bg-white common-padding-bar sticky bottom-0 border-t-[1px] border-slate-200 h-20 items-center flex">
            <div className="screen-max-width flex w-full justify-end">
                <div className="flex flex-row w-full justify-between items-center">
                    <p className="text-black text-2xl font-semibold">{children}</p>
                    <div className="flex flex-row items-center gap-6">
                        <p className="text_semibold_black">{priceSelected} zł</p>
                        <ButtonBuy small onClick={handleAddToCart}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
