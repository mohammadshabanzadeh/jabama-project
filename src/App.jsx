
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeProperties from "./pages/HomeProperties";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<HomeProperties />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
