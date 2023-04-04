import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import CartContextProvider from "./context/contextWithReducer";
import OrderedPage from "./components/OrderedPage/OrderedPage";

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/restaurant/:resId" element={<RestaurantPage />} />
        <Route path="/order" element={<OrderedPage />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
