import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Plans from "./components/Plans";
import gym from "../src/assets/images/woman-helping-man-gym.jpg";
import Programs from "./components/Programs";
import Datas from "./components/Datas";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <div className="bg-blue-50 font-jaldi">
        <Header />
        <Banner />
        <About />
        <Programs />
        <Datas />
        <Testimonials />
        <Plans />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
