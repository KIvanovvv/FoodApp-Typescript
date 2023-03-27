import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
// import CartContextProvider from "./context/contextWithReducer";

function App() {
  return (
    // <CartContextProvider>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurant/:resId" element={<RestaurantPage />} />
      </Routes>
    // </CartContextProvider>
  );
}

export default App;
