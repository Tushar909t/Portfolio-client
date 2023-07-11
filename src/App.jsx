import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./Footer/Footer";
import { useSelector } from "react-redux";
function App() {
  const darkMode = useSelector((state) => state.dark.DarkMode);

  return (
    <div className="App" style={{ background: darkMode ? "#000" : "#fff" }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
