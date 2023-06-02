import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import * as React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import { Box, ClickAwayListener, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart2 from "./Cart2";
import Checkout from "./Checkout";
import { set } from "mongoose";

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
  const quantity = items.reduce((a, b) => a + b.quantity, 0);

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
  const onLooseFocus = () => {
    setCartVisible(false);
    setCheckoutVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setCartVisible(false)}>
      <Box>
        <IconButton onClick={handleClick}>
          <Badge badgeContent={quantity} sx={badgeStyles}>
            <ShoppingCartIcon sx={{ fontSize: 32, color: "#eae2b7" }} />
          </Badge>
        </IconButton>
        <Cart2
          cartVisible={cartVisible}
          onClosingCart={onClosingCart}
          onOpenCheckout={onOpenCheckout}
        />
        <Checkout
          checkoutVisible={checkoutVisible}
          onClosingCheckout={onClosingCheckout}
        />
      </Box>
    </ClickAwayListener>
  );
}

export default CartWrapper;
