import {useEffect, useState} from "react";

function Footer() {
    const [productsIphone, setProductsIphone] = useState([]);
    const [productsMacbook, setProductsMacbook] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch(`${import.meta.env.VITE_SERVER_URL}/products/iphone`).then(res => res.json()).then(data => setProductsIphone(data)),
            fetch(`${import.meta.env.VITE_SERVER_URL}/products/macbook`).then(res => res.json()).then(data => setProductsMacbook(data))
        ]).catch(err => console.log(err));
    }, [])


    return (
        <div className="bg-white common-padding-bar h-full w-full  text-black border-t-[0.5px] border-gray-400/20 ">
            <div className="screen-max-width flex w-full py-4 gap-12">
                <div className="flex flex-col gap-1">
                    <p className="text_semibold_black ">Iphone</p>
                    <ul className="flex flex-col gap-1">
                        {productsIphone.map((product) => (

                            <li key={product.id}><a className="hiw-text-small-2 "
                                                    href={`/products/${product.id}`}>{product.title}</a></li>
                        ))}

                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text_semibold_black">Macbook</p>
                    <ul className="flex flex-col gap-1">
                        {productsMacbook.map((product) => (

                            <li key={product.id}><a className="hiw-text-small-2"
                                                    href={`/products/${product.id}`}>{product.title}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className="screen-max-width border-t-[0.5px] border-gray-400/20">
                <p className="hiw-text-small-2 py-2">Copyright © 2024 My Inc. Wszelkie prawa zastrzeżone.</p>
                <ul className="flex gap-2 md:gap-10 py-2 flex-wrap ">
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Polityka prywatności</a></li>
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Wykorzystanie plików cookie</a></li>
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Warunki korzystania</a></li>
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Sprzedaż i zwroty</a></li>
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Informacje prawne</a></li>
                    <li><a className="border-r-[0.5px] pr-2 hiw-text-small-2">Mapa witryny</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;