
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import About from "./components/About";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <About/>
      <Footer />
      <Toaster />
    </>
  )
}
  
  export default App;
 