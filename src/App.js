import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Events from "./components/Events/Events";
import Question from "./components/Question/Question";
import Marques from "./components/Marques/Marques";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Events />
      <Question />
      <Marques />
      <Footer />
    </div>
  );
}

export default App;
