import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Macbook from "./pages/Macbook";
import Store from "./pages/Store";
import ProductPage from "./pages/product/ProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OpenBagProvider } from "./context/OpenBagContext";
import Footer from "./components/Footer.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import ThankYouPageForm from "./pages/ThankYouPageForm.jsx";
function App() {
  return (
    <OpenBagProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/macbook" element={<Macbook />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/thankyou" element={<ThankYouPage />}/>
          <Route path="/ThankYouPageForm" element={<ThankYouPageForm />}/>
        </Routes>
        <ToastContainer position="bottom-right" />
        <Footer/>
      </Router>
    </OpenBagProvider>
  );
}

export default App;
