import {contactImg, contactMacbookImg, contactPhoneImg, topicImg} from "../utils/index.js";
import {useState} from "react";


function Contact() {
    const [selection, setSelection] = useState(null);
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
                <div className="flex justify-center items-center gap-10">
                    <div onClick={() => setSelection(0)}
                         className={`${selection === 0 && ' bg-gray-200 '} flex items-center justify-center w-[240px] h-[160px] rounded-xl`}>
                        <img
                            className={` h-[100px] cursor-pointer object-contain`}
                            src={contactPhoneImg} alt="contact"/>
                    </div>
                    <div onClick={() => setSelection(1)} className={`${selection === 1 && ' bg-gray-200 '} flex items-center justify-center w-[240px] h-[160px] p-10 rounded-xl`}>
                        <img className="h-[100px] cursor-pointer object-contain" src={contactMacbookImg}
                             alt="contact"/>
                    </div>
                </div>
                <div className="box grid grid-cols-3 gap-10 ">
                    <div className="bg-gray-200/20 flex flex-col rounded-xl p-10 justify-center items-center max">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Forgot Apple Account password</p>
                    </div>
                    <div
                        className="bg-gray-200/20 rounded-xl p-10 flex flex-col rounded-xl p-10 justify-center items-center">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Apple Repair</p>
                    </div>
                    <div
                        className="bg-gray-200/20 rounded-xl p-10 flex flex-col rounded-xl p-10 justify-center items-center">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Billing and subscriptions</p>
                    </div>
                </div>


                {/*FORM*/}
                <form className="flex flex-col gap-6 text-black">
                    <div className="flex flex-col ">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="shadow-sm border p-2 rounded-xl"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" className="shadow-sm border p-2 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="textarea">More details</label>
                        <textarea id="textarea" className="shadow-sm border p-2 rounded-xl"/>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default Contact