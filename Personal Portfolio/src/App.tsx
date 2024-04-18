import { Route, Routes } from "react-router-dom";
import Background from "./components/background/Background";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [backgroundDisplay, setBackgroundDisplay] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    console.log(backgroundDisplay);
    if (backgroundDisplay === "none") {
      setBackgroundColor(
        "linear-gradient(40deg, rgb(34, 40, 49), rgb(49, 54, 63))"
      );
    } else {
      setBackgroundColor("");
    }
  }, [backgroundDisplay]);
  return (
    <>
      <div
        style={{
          position: "relative",
          height: backgroundDisplay === "none" ? "100%" : "100vh",
          background: backgroundColor,
        }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Background
          backgroundDisplay={backgroundDisplay}
          setBackgroundDisplay={setBackgroundDisplay}
        />
        {/* other components go here */}
      </div>
    </>
  );
};

export default App;
