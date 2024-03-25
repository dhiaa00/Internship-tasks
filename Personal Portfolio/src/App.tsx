import { Route, Routes } from "react-router-dom";
import Background from "./components/background/Background";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Background />
        {/* other components go here */}
      </div>
    </>
  );
};

export default App;
