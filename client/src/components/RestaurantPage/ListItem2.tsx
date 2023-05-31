import {
  ListItem,
  ListItemText,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../context/contextWithReducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ListItem2: React.FC<{
  name: string;
  price: number;
  description: string;
  category: string;
  delivery: number;
  freeDelivery: number;
  restaurantName: string;
  categoryBtnClicked: boolean;
  scrollDown: (ref: any) => void;
}> = (props) => {
  const { actions } = useContext(CartContext);
  const categoryRef = useRef(null);

  useEffect(() => {
    props.scrollDown(categoryRef);
  }, [props.categoryBtnClicked]);

  const onAddToCartHandler = () => {
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
    <ListItem ref={categoryRef}>
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
    </ListItem>
  );
};

export default ListItem2;
