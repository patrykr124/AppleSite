import {contactImg, contactMacbookImg, contactPhoneImg, topicImg} from "../utils/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Contact() {
    const [selectionProduct, setSelectionProduct] = useState(null);
    const [topic, setTopic] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let isActive = " bg-gray-200/20 "

    const validate = () => {
        let errorText = {};
        if (!name.trim()) {
            errorText.name = "Name is required";
        }
        if (!email.trim() && !email.includes("@")) {
            errorText.email = "Email is required";
        }
        if (!details.trim()) {
            errorText.detail = "Details is required";
        }
        if (selectionProduct === null) {
            errorText.product = "Product is required";
        }
        if (topic === null) {
            errorText.topic = "Topic is required";
        }

        setError(errorText)
        return Object.keys(errorText).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", {name, email, selectionProduct, topic});
            setTopic(null);
            setName("");
            setEmail("");
            setSelectionProduct(null);
            setDetails("");
            navigate("/ThankYouPageForm");
        }


    }


    return (
        <div className="bg-white">
            <div className="">
                <img src={contactImg} alt="contact"/>
            </div>
            <div className="common-padding screen-max-width flex flex-col gap-16">
                <div className="inline-flex flex-col gap-8">
                    <h1 className="section-heading-offanima text-center">Apple Support</h1>
                    <p className="text-black text-center">Which product is the problem with?</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-8">
                        <div className="flex justify-center items-center gap-10">
                            <div onClick={() => setSelectionProduct(0)}
                                 className={`${selectionProduct === 0 && isActive} flex items-center justify-center w-[240px] h-[160px] rounded-xl`}>
                                <img
                                    className={` h-[100px] cursor-pointer object-contain`}
                                    src={contactPhoneImg} alt="contact"/>
                            </div>
                            <div onClick={() => setSelectionProduct(1)}
                                 className={`${selectionProduct === 1 && isActive} flex items-center justify-center w-[240px] h-[160px] p-10 rounded-xl`}>
                                <img className="h-[100px] cursor-pointer object-contain" src={contactMacbookImg}
                                     alt="contact"/>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {error.product && <p className="text-red-500">{error.product}</p>}
                    </div>
                </div>
                <div className="box gap-10 flex-col flex  ">
                    <div className="">
                        <p className="text-black text-center">Which product is the problem with?</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="">
                            <div className="grid grid-cols-3 gap-10  ">
                                <div onClick={() => setTopic(1)}
                                     className={`${topic === 1 && isActive}  flex flex-col rounded-xl p-10 justify-center items-center max`}>
                                    <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                                    <p className="text-black
                        ">Forgot Apple Account password</p>
                                </div>
                                <div onClick={() => setTopic(2)}
                                     className={`${topic === 2 && isActive}  flex flex-col rounded-xl p-10 justify-center items-center max`}>
                                    <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                                    <p className="text-black
                        ">Apple Repair</p>
                                </div>
                                <div onClick={() => setTopic(3)}
                                     className={`${topic === 3 && isActive}  flex flex-col rounded-xl p-10 justify-center items-center max`}>
                                    <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                                    <p className="text-black
                        ">Billing and subscriptions</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            {error.topic && <p className="text-red-500 ">{error.topic}</p>}
                        </div>
                    </div>

                </div>


                {/*FORM*/}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-black">
                    <div className="flex flex-col ">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                               className="shadow-sm border p-2 rounded-xl"/>
                        {error.name && <p className="text-red-500">{error.name}</p>}
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="shadow-sm border p-2 rounded-xl"/>
                        {error.email && <p className="text-red-500">{error.email}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="textarea">More details</label>
                        <textarea id="textarea" value={details} onChange={(e) => setDetails(e.target.value)}
                                  className="shadow-sm border p-2 rounded-xl"/>
                        {error.detail && <p className="text-red-500">{error.detail}</p>}
                    </div>
                    <button
                        className="bg-blue hover:bg-blue/60 transition-all duration-200 text-white p-2 rounded-xl">Submit
                    </button>
                </form>


            </div>
        </div>
    )
}

export default Contact