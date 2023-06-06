import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
import CartContextProvider from "./context/contextWithReducer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import OrderPage from "./components/OrderedPage/OrderPage";
import { Stack } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Menu />} />
          <Route path="/restaurant/:resId" element={<RestaurantPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<Menu />} />
        </Routes>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
