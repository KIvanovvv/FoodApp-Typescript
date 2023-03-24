import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
