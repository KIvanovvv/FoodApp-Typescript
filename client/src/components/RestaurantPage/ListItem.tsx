import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextWithReducer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const ListItems: React.FC<{
  name: string;
  price: number;
  description: string;
  category: string;
  delivery: number;
  freeDelivery: number;
  restaurantName: string;
  status: string;
}> = (props) => {
  const [isClosed, setIsClosed] = useState(
    props.status === "Open" ? false : true
  );
  const [showWarning, setShowWarning] = useState(false);
  const { actions } = useContext(CartContext);

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const onAddToCartHandler = () => {
    if (isClosed) {
      setShowWarning(true);
      return;
    }
    actions.addItem({
      itemName: props.name,
      price: props.price,
      quantity: 1,
      delivery: props.delivery,
      freeDelivery: props.freeDelivery,
      restaurantName: props.restaurantName,
    });
  };

  return (
    <ListItem>
      <ListItemText
        key={props.name}
        primary={
          <Stack alignItems={"flex-start"} gap={1}>
            <Typography variant="h6" fontWeight={"bold"}>
              {props.name}
            </Typography>
            <Typography variant="body1">{props.description}</Typography>
            <Stack
              direction={"row"}
              gap={2}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Typography
                variant="body1"
                fontWeight={"bold"}
                sx={{ display: "flex", alignSelf: "center" }}
              >
                ${props.price.toFixed(2)}{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ fontWeight: "bold" }}
                color="success"
                onClick={onAddToCartHandler}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        }
      />
      <Snackbar
        open={showWarning}
        autoHideDuration={6000}
        onClose={() => setShowWarning(false)}
      >
        <Alert
          onClose={() => setShowWarning(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          This restaurant is closed.
        </Alert>
      </Snackbar>
    </ListItem>
  );
};

export default ListItems;
