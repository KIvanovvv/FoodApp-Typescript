import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/restaurant/:resId" element={<RestaurantPage />} />
    </Routes>
  );
}

export default App;
