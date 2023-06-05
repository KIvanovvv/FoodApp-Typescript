import { useContext, useState } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import { Box, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import Checkout from "./Checkout";

const badgeStyles = {
  "& .MuiBadge-badge": {
    right: 2,
    top: 22,
    border: `2px solid white`,
    padding: "0 4px",
    backgroundColor: "#f77f00",
    fontWeight: 800,
  },
};

function CartWrapper() {
  const [cartVisible, setCartVisible] = useState(false);
  const { items } = useContext(CartContext);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [totalFromCart, setTotalFromCart] = useState(0);
  const [uniqueDeliveries, setUniqueDeliveries] = useState([]);

  const quantity = items.reduce((a, b) => a + b.quantity, 0);

  const getDataFromCart = (total: number, uniqueDeliveries: []) => {
    setTotalFromCart(total);
    setUniqueDeliveries(uniqueDeliveries);
  };

  const onClosingCheckout = () => {
    setCheckoutVisible(false);
  };
  const onOpenCheckout = () => {
    setCheckoutVisible(true);
  };

  const handleClick = () => {
    setCartVisible((prevState) => !prevState);
  };

  const onClosingCart = () => {
    setCartVisible(false);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={quantity} sx={badgeStyles}>
          <ShoppingCartIcon sx={{ fontSize: 32, color: "#eae2b7" }} />
        </Badge>
      </IconButton>
      <Cart
        cartVisible={cartVisible}
        onClosingCart={onClosingCart}
        onOpenCheckout={onOpenCheckout}
        getData={getDataFromCart}
      />
      <Checkout
        checkoutVisible={checkoutVisible}
        onClosingCheckout={onClosingCheckout}
        items={items}
        total={totalFromCart}
        uniqueDeliveries={uniqueDeliveries}
      />
    </Box>
  );
}

export default CartWrapper;
