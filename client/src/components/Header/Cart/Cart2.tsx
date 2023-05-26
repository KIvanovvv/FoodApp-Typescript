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

export default function Cart2(props: any) {
  const { items, actions } = useContext(CartContext);
  const onRemoveFromCart = (itemName: string) => {
    actions.removeItem(itemName);
  };
  const onAddFromCart = (itemName: string) => {
    const item = items.find((x) => x.itemName === itemName);
    if (!item) return;
    actions.addItem(item);
  };
  const uniqueDeliveries: UniqueDelivery[] = [];

  items.forEach((item) => {
    const existing = uniqueDeliveries.find(
      (delivery: any) => delivery.restaurantName === item.restaurantName
    );
    if (!existing) {
      uniqueDeliveries.push({
        price: item.delivery,
        restaurantName: item.restaurantName,
        hasFreeDelivery: false,
      });
    }
  });

  const freeDeliveryData: FreeDeliveryData[] = [];
  uniqueDeliveries.forEach((x) => {
    const result = items
      .filter((item) => item.restaurantName === x.restaurantName)
      .reduce((a, b) => a + b.price, 0);

    freeDeliveryData.push({
      price: result,
      restaurantName: x.restaurantName,
      freeDelivery: items.find((y) => y.restaurantName === x.restaurantName)
        ?.freeDelivery,
    });
  });

  freeDeliveryData.forEach((data) => {
    if (data.price >= data.freeDelivery!) {
      const index = uniqueDeliveries.findIndex(
        (x) => x.restaurantName === data.restaurantName
      );
      uniqueDeliveries[index].hasFreeDelivery = true;
    }
  });
  uniqueDeliveries.forEach((x: any) => {
    if (x.hasFreeDelivery) {
      x.price = 0;
    }
  });
  const total =
    items.reduce((a, b) => a + b.price, 0) +
    uniqueDeliveries.reduce((a: number, b: any) => a + b.price, 0);

  // const onHandleCheckout = () => {
  //   setShowModal(true);
  // };
  const onHandleClear = () => {
    actions.clearCart();
  };
  const list = () => (
    <Box
      sx={{ width: { xs: 300, sm: 450 }, padding: "20px 30px" }}
      role="presentation"
      //   onClick={toggleCart(anchor, false)}
      //   onKeyDown={toggleCart(anchor, false)}
    >
      <Typography variant="h4" align="center" fontWeight={"bold"}>
        Cart
      </Typography>
      {items.length > 0 && (
        <>
          <List>
            {items.map((item) => (
              <ListItem key={item.itemName} disablePadding>
                <ListItemText
                  primary={`${item.itemName} x${item.quantity}`}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: 22,
                  }}
                  secondary={`$${item.price.toFixed(2)}`}
                  secondaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "black",
                  }}
                />
                <IconButton onClick={() => onRemoveFromCart(item.itemName)}>
                  <RemoveCircleIcon fontSize="large" color="error" />
                </IconButton>
                <IconButton onClick={() => onAddFromCart(item.itemName)}>
                  <AddCircleIcon fontSize="large" color="success" />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {uniqueDeliveries.map((delivery) => (
              <ListItem key={delivery.restaurantName} disablePadding>
                <ListItemText
                  primary={`Delivery from ${delivery.restaurantName}`}
                  primaryTypographyProps={{ fontWeight: "bold", fontSize: 22 }}
                  secondary={
                    delivery.price === 0
                      ? "Free Delivery"
                      : "$" + delivery.price.toFixed(2)
                  }
                  secondaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: delivery.hasFreeDelivery ? "green" : "black",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary={`Total Price`}
                primaryTypographyProps={{ fontWeight: "bold", fontSize: 22 }}
                secondary={`$${total.toFixed(2)}`}
                secondaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "black",
                }}
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            endIcon={<ShoppingCartCheckoutIcon />}
            size="large"
            fullWidth
            color="secondary"
          >
            Checkout
          </Button>
        </>
      )}
      {items.length === 0 && (
        <>
          <Typography variant="h5" align="center" fontWeight={"bold"}>
            Your cart is empty
          </Typography>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={props.cartVisible}
          onClose={props.onClosingCart}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
