import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Navbar />
      <Background />
      {/* other components go here */}
    </div>
  );
};

export default App;
