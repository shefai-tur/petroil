
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Header from "./components/Headar";
import Logo from "./components/Logo";
import Maps from "./components/Maps";
import Navber from "./components/Navber";
import Service from "./components/Service";
import Supplier from "./components/Supplier.js";

function App() {
  return (
    <>
      <Header />
      <Navber />
      <Banner />
      <Supplier />
      <Service />
      <Company />
      <Logo />
      <Blog />
      <Maps/>
      <Footer/>
    
    </>
  );
}

export default App;
