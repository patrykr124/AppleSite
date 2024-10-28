import {contactImg, contactMacbookImg, contactPhoneImg, topicImg} from "../utils/index.js";


function Contact() {
    return (
        <div className="bg-white">
            <div className="">
                <img src={contactImg} alt="contact"/>
            </div>
            <div className="common-padding screen-max-width flex flex-col gap-16">
                <div className="">
                    <h1 className="section-heading-offanima text-center">Apple Support</h1>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <img className=" h-[100px]" src={contactPhoneImg} alt="contact"/>
                    <img className="h-[100px]" src={contactMacbookImg} alt="contact"/>
                </div>
                <div className="box grid grid-cols-3 gap-10 ">
                    <div className="bg-gray-200/20 flex flex-col rounded-xl p-10 justify-center items-center max">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Forgot Apple Account password</p>
                    </div>
                    <div className="bg-gray-200/20 rounded-xl p-10 flex flex-col rounded-xl p-10 justify-center items-center">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Apple Repair</p>
                    </div>
                    <div className="bg-gray-200/20 rounded-xl p-10 flex flex-col rounded-xl p-10 justify-center items-center">
                        <img className="max-h-[80px]" src={topicImg} alt="contact"/>
                        <p className="text-black
                        ">Billing and subscriptions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact