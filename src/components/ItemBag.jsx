import {MinusIcon, PlusIcon} from "lucide-react";

import {useNavigate} from "react-router-dom";
import {useOpenBag} from "../context/OpenBagContext";
import useCartStore from "../context/cart";


function ItemBag() {
    const {cartItems, updateQuantity, removeItem,priceSelected} = useCartStore();
    const {handleOpen} = useOpenBag();
    const navigate = useNavigate();




    function handleProductClick(id) {
        navigate(`/products/${id}`);
        handleOpen(false);
    }

    function handleClosebag() {
        handleOpen(false);
    }

    function handleQuantityPlus(item) {
        updateQuantity(item.id, item.quantity + 1);
    }

    function handleQuantityMinus(item) {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            removeItem(item.id);
        }
    }

    const totalPrice = cartItems.reduce(
        (total, items) => total + priceSelected * items.quantity,
        0
    );


    //stripe

    const makePayment = async () => {
        try {
            const response = await fetch('http://localhost:5000/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: cartItems.map((item) => ({
                        id: item.id,
                        quantity: item.quantity,
                        price: priceSelected,
                        title: item.title,
                        img: item.img,
                    }))
                })
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const {url} = await response.json();
            window.location.href = url;

        } catch (error) {
            console.error("Błąd:", error);
        }
    }


    return (
        <div className="flex flex-col relative">
            <div className="text-black p-2 my-10 gap-10 flex flex-col ">
                <div className="box gap-10 flex flex-col">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id}>
                                <div className="flex gap-12">
                                    <a
                                        onClick={() => handleProductClick(item.id)}
                                        className="flex justify-between items-center gap-12 cursor-pointer group"
                                    >
                                        <div
                                            className="img group-hover:scale-102 transition-all duration-500 w-[120px] h-[120px] ">
                                            <img
                                                src={item.img}
                                                alt="product"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <div className="info ">
                                            <p className="title font-bold">{item.title}</p>
                                            <p className="desc">{item.desc}</p>
                                            <p className="price">{item.price} zł</p>
                                        </div>
                                    </a>
                                    <div className="quantity flex gap-2 items-center justify-center">
                                        <MinusIcon
                                            onClick={() => handleQuantityMinus(item)}
                                            className="cursor-pointer"
                                        />
                                        <p className="min-w-[20px] flex justify-center select-none ">
                                            {item.quantity}
                                        </p>
                                        <PlusIcon
                                            onClick={() => handleQuantityPlus(item)}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="absolute top-[100%] left-[50%] space-y-4 -translate-x-1/2 translate-y-1/2">
                            <img
                                className="opacity-60 h-[150px]"
                                src="/assets/images/empty.png"
                                alt="empty-cart"
                            />
                            <hr className="bg-gray-700"></hr>
                            <p className="hiw-text-small">Your cart is empty</p>
                        </div>
                    )}
                </div>
            </div>
            {cartItems.length > 0 && (
                <div className="flex px-6  gap-4 w-full fixed bottom-0 bg-white border-t-[1px] border-stone-100">
                    <div className="flex gap-2 py-2">
                        <button onClick={makePayment} className="btn">Checkout</button>
                        <button onClick={handleClosebag} className="btn">
                            Continue shopping
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <p className="text-black hiw-text-small">
                            <span className="text-black ">Total: {totalPrice} zł</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemBag;
