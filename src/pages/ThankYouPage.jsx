import {okVideo} from "../utils/index.js";
import ButtonBack from "../components/UI/ButtonBack.jsx";

function ThankYouPage() {
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
                <h1 className="section-heading-offanima">Thank you for your order!</h1>
                <p className="hiw-subtitle-offanimation">Please check you email!</p>
                <ButtonBack href="/"/>
            </div>
        </div>
    );
}

export default ThankYouPage;