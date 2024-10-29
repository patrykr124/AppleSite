
function Capacity({product, setSelected, selected}) {



    return (
        <div className="gap-6 flex flex-col">
            <h3 className="feature-text-offanima ">
                <span className="text-black">Capacity.</span> How much memory do you
                need?
            </h3>
            <div className="boxs flex flex-col gap-4">
                {product?.options?.length && product?.options?.map((capacity,index) => (
                    <div
                        onClick={() => setSelected(index)}
                        key={capacity?.title}
                        className={`capacity-container ${
                            selected === index
                                && "btnStatic text-white border-blue"
                        }`}
                    >
                        <p>{capacity?.title}</p>
                        <p>{capacity?.additionalPrice} zł</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Capacity;
