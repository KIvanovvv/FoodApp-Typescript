import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";
import * as React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import { Box, ClickAwayListener, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart2 from "./Cart2";
import { log } from "console";

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
  const quantity = items.reduce((a, b) => a + b.quantity, 0);

  const handleClick = () => {
    setCartVisible((prevState) => !prevState);
  };
  React.useEffect(() => {
    console.log("cartVisible", cartVisible);
  }, [cartVisible]);

  const onClosingCart = () => {
    setCartVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setCartVisible(false)}>
      <Box>
        <IconButton onClick={handleClick}>
          <Badge badgeContent={quantity} sx={badgeStyles}>
            <ShoppingCartIcon sx={{ fontSize: 32, color: "#eae2b7" }} />
          </Badge>
        </IconButton>
        <Cart2 cartVisible={cartVisible} onClosingCart={onClosingCart} />
      </Box>
    </ClickAwayListener>
  );
}

export default CartWrapper;
