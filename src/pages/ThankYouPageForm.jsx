import {okVideo} from "../utils/index.js";
import ButtonBack from "../components/UI/ButtonBack.jsx";

function ThankYouPageForm() {
    return (
        <div className="">
            <div className="creen-max-width common-padding h-screen bg-white justify-center items-center flex flex-col">
                <div className="w-56 h-56 flex justify-center items-center">
                    <video
                        className="pointer-events-none"
                        muted
                        autoPlay

                    >
                        <source src={okVideo} type="video/mp4"/>
                    </video>
                </div>
                <h1 className="section-heading-offanima">Thank you for your message!</h1>
                <p className="hiw-subtitle-offanimation">we will solve your problem as soon as possible</p>
                <ButtonBack href="/"/>
            </div>
        </div>
    );
}

export default ThankYouPageForm;