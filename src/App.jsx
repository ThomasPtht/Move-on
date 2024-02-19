import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Plans from "./components/Plans";
import gym from "../src/assets/images/woman-helping-man-gym.jpg";
import Programs from "./components/Programs";
import Datas from "./components/Datas";

function App() {
  return (
    <>
      <div className="bg-blue-50 font-jaldi">
        <Header />
        <Banner />
        <About />
        {/* <img className="h-2/6 " src={gym} alt="" /> */}
        <Programs />
        <Datas />
        <Plans />
      </div>
    </>
  );
}

export default App;
