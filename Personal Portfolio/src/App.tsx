import { Route, Routes } from "react-router-dom";
import Background from "./components/background/Background";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Background />
        {/* other components go here */}
      </div>
    </>
  );
};

export default App;
