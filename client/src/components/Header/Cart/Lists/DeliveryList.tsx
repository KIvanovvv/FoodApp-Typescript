import { ListItem, ListItemText } from "@mui/material";
import { UniqueDelivery } from "../../../../models/types";

const DeliverList = (props: { delivery: UniqueDelivery }) => {
  return (
    <>
      <ListItem key={props.delivery.restaurantName} disablePadding>
        <ListItemText
          primary={`Delivery from ${props.delivery.restaurantName}`}
          primaryTypographyProps={{ fontWeight: "bold", fontSize: 22 }}
          secondary={
            props.delivery.price === 0
              ? "Free Delivery"
              : "$" + props.delivery.price.toFixed(2)
          }
          secondaryTypographyProps={{
            fontSize: 16,
            fontWeight: "bold",
            color: props.delivery.hasFreeDelivery ? "green" : "black",
          }}
        />
      </ListItem>
    </>
  );
};

export default DeliverList;
