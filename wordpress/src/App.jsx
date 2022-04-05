import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
