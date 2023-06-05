import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button, Typography } from "@mui/material";
import { CartContext } from "../../../context/contextWithReducer";
import { FreeDeliveryData, UniqueDelivery } from "../../../models/types";
import ItemList from "./Lists/ItemList";
import DeliverList from "./Lists/DeliveryList";
import TotalPriceList from "./Lists/TotalPriceList";

export default function Cart(props: any) {
  const { items, actions } = useContext(CartContext);

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

  const onHandleCheckout = () => {
    props.getData(total, uniqueDeliveries);
    // props.onClosingCart();
    props.onOpenCheckout();
  };
  const list = () => (
    <Box
      sx={{ width: { xs: 300, sm: 450 }, padding: "20px 30px" }}
      role="presentation"
    >
      <Typography variant="h4" align="center" fontWeight={"bold"}>
        Cart
      </Typography>
      {items.length > 0 && (
        <>
          <List>
            {items.map((item) => (
              <ItemList item={item} key={item.itemName} />
            ))}
          </List>
          <Divider />
          <List>
            {uniqueDeliveries.map((delivery) => (
              <DeliverList delivery={delivery} key={delivery.restaurantName} />
            ))}
          </List>
          <Divider />
          <TotalPriceList total={total} />
          <Button
            variant="contained"
            endIcon={<ShoppingCartCheckoutIcon />}
            size="large"
            fullWidth
            color="secondary"
            onClick={onHandleCheckout}
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
