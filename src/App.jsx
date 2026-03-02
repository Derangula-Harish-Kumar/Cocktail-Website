// import Div1 from "./components/Div1";
// import Div2 from "./components/Div2";
import TheArt from "./components/TheArt";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import MocktailList from "./components/MocktailList";
import AboutSection from "./components/AboutSection";
import Images from "./components/Images";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Herosection />
      <MocktailList />
      <AboutSection />
      <Images />
      {/* <Div1 /> */}
      <TheArt />
      {/* <Div2 /> */}
      <Footer />
    </main>
  );
};

export default App;
