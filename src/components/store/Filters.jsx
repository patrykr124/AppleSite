import {useProductStore} from "../../context/AddToCart";

function Filters() {
    const {filters, setTypeFilter, setPriceFilter} = useProductStore();

    const handlePriceFilter = (e) => {
        const value = e.target.value || null;
        setPriceFilter(value);
    };

    const handleTypeFilter = (e) => {
        const value = e.target.value || null;
        setTypeFilter(value);
    };

    return (
        <div className="screen-max-width py-8 flex flex-col md:flex-row gap-10">
            <div className="boxFilter flex md:flex-row flex-col  gap-2 ">
                <p className=" text-black text-xl">Sort by price:</p>
                <select
                    className=" text-black bg-gray-200/20 rounded-lg px-4"
                    name="price"
                    id="price"
                    value={filters.priceFilter || ""}
                    onChange={handlePriceFilter}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div className="boxFilter flex gap-2 md:flex-row flex-col ">
                <p className=" text-black text-xl">Sort by type of products</p>
                <select
                    className=" text-black bg-gray-200/20 rounded-lg px-6 "
                    name="type"
                    id="type"
                    value={filters.typeFilter || ""}
                    onChange={handleTypeFilter}
                >
                    <option value="iphone">Iphone</option>
                    <option value="macbook">Macbook</option>
                    <option value="all">All</option>
                </select>
            </div>
        </div>
    );
}

export default Filters;
