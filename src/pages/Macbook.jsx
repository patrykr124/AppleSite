import FeaturesMacbook from "../components/macbook/FeaturesMacbook";
import HeroMacbook from "../components/macbook/HeroMacbook";
import HighlightsMacbook from "../components/macbook/HighlightsMacbook";
import HowItWorksMacbook from "../components/macbook/HowItWorksMacook";
import Slider from "../components/macbook/Slider";
import Tabs from "../components/macbook/Tabs";

function Macbook() {
  return (
    <>
      <main className="bg-white">
        <HeroMacbook />
      </main>
      <main className="bg-black">
        <HighlightsMacbook />
        <Slider />
        <FeaturesMacbook />
        <HowItWorksMacbook />
        <Tabs />
      </main>
    </>
  );
}

export default Macbook;
