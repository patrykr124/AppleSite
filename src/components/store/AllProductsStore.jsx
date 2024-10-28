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
        <div className="screen-max-width">
            <div className="box flex flex-wrap lg:gap-6 gap-0">
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
