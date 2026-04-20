
import Home from './component/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCards from "./component/InfoCards";
import InfoSlider from "./component/InfoSlider";
import ContactSection from "./component/ContactSection";
import TestimonialSection from "./component/TestimonialSection";
//import ContactFormSection from "./component/ContactFormSection";
import Contact from './component/Contact';
import Footer from './component/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <InfoCards />
      <InfoSlider />
      <ContactSection />
      <TestimonialSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;