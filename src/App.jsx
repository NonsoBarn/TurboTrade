import "./App.css";
import BuyCrypto from "./components/Buycrypto";

import Footer from "./components/Footer";
import GiftCard from "./components/Giftcard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Perks from "./components/Perks";
import Signup from "./components/Signup";
import TradeCrypto from "./components/Tradecrypto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TradeCrypto />
      <BuyCrypto />
      <GiftCard />
      <Perks />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
