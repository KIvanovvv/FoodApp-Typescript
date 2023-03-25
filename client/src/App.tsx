import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import Restaurant from "./components/Restaurant/Restaurant";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/restaurant/:resId" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
