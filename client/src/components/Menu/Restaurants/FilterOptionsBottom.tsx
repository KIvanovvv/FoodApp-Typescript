import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button, IconButton, InputLabel, Typography } from "@mui/material";
import { CartContext } from "../../../context/contextWithReducer";
import { FreeDeliveryData, UniqueDelivery } from "../../../models/types";

export default function FilterOptionsBottom(props: any) {
  const list = () => (
    <Box
      sx={{ width: { xs: 300, sm: 450 }, padding: "20px 30px" }}
      role="presentation"
      //   onClick={toggleCart(anchor, false)}
      //   onKeyDown={toggleCart(anchor, false)}
    ></Box>
  );

  return (
    <div>
      <Drawer
        anchor={"bottom"}
        open={props.open}
        //   onClose={props.onClosingCart}
      >
        <Typography>7 Restaurants</Typography>
        <Typography>Open now</Typography>
        <Typography>Minimla delivery</Typography>
      </Drawer>
    </div>
  );
}
