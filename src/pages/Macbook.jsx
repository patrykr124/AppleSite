import CollectionsMacbook from "../components/macbook/CollectionsMacbook";
import FeaturesMacbook from "../components/macbook/FeaturesMacbook";
import HeroMacbook from "../components/macbook/HeroMacbook";
import HighlightsMacbook from "../components/macbook/HighlightsMacbook";
import HowItWorksMacbook from "../components/macbook/HowItWorksMacook";
import Slider from "../components/macbook/Slider";
import Tabs from "../components/macbook/Tabs";

function Macbook() {
  return (
      <>
          <main className="">
              <HeroMacbook/>
              <HighlightsMacbook/>
              <Slider/>
              <FeaturesMacbook/>
              <HowItWorksMacbook/>
              <Tabs/>
              <CollectionsMacbook/>
          </main>
      </>
  );
}

export default Macbook;
