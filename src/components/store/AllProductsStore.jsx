import {useEffect} from "react";
import CartProduct from "./CartProduct";
import {useProductStore} from "../../context/AddToCart";

function AllProductsStore() {
    const {fetchProducts, filteredProducts} = useProductStore((state) => ({
        filteredProducts: state.filteredProducts,
        fetchProducts: state.fetchProducts,
    }));

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="screen-max-width ">
            <div className="box flex items-center md:justify-start justify-around flex-wrap gap-10 ">
                {filteredProducts.map((product) => (
                    <CartProduct
                        key={product.id}
                        href={`/products/${product.id}`}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllProductsStore;
