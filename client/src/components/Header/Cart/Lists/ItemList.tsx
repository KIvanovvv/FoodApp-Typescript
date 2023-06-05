import { CartItem } from "../../../../context/contextWithReducer/types";
import { useContext } from "react";
import { CartContext } from "../../../../context/contextWithReducer";
import { ListItemText, IconButton, ListItem } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ItemList: React.FC<{ item: CartItem }> = (props) => {
  const { items, actions } = useContext(CartContext);
  const onRemoveFromCart = (itemName: string) => {
    actions.removeItem(itemName);
  };
  const onAddFromCart = (itemName: string) => {
    const item = items.find((x) => x.itemName === itemName);
    if (!item) return;
    actions.addItem(item);
  };
  return (
    <ListItem key={props.item.itemName} disablePadding>
      <ListItemText
        primary={`${props.item.itemName} x${props.item.quantity}`}
        primaryTypographyProps={{
          fontWeight: "bold",
          fontSize: 22,
        }}
        secondary={`$${props.item.price.toFixed(2)}`}
        secondaryTypographyProps={{
          fontSize: 16,
          fontWeight: "bold",
          color: "black",
        }}
      />
      <IconButton onClick={() => onRemoveFromCart(props.item.itemName)}>
        <RemoveCircleIcon fontSize="large" color="error" />
      </IconButton>
      <IconButton onClick={() => onAddFromCart(props.item.itemName)}>
        <AddCircleIcon fontSize="large" color="success" />
      </IconButton>
    </ListItem>
  );
};

export default ItemList;
