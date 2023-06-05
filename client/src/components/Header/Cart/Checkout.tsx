import {
  Drawer,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
  ListItem,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useNavigate } from "react-router";
import { CartItem } from "../../../context/contextWithReducer/types";
import { UniqueDelivery } from "../../../models/types";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ItemList from "./Lists/ItemList";
import DeliverList from "./Lists/DeliveryList";

const Checkout: React.FC<{
  checkoutVisible: boolean;
  onClosingCheckout: () => void;
  items: CartItem[];
  total: number;
  uniqueDeliveries: UniqueDelivery[];
}> = (props) => {
  const navigate = useNavigate();
  const onSubmitOrder = () => {
    navigate("/order");
  };
  const list = () => (
    <Stack role="presentation" mt={5} alignItems={"center"} gap={2}>
      <Typography variant="h4" color={"secondary "}>
        Please fill your details
      </Typography>
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>Name</Typography>}
        variant="outlined"
        size="small"
        color="success"
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>City</Typography>}
        variant="outlined"
        size="small"
        color="success"
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>Street</Typography>}
        variant="outlined"
        size="small"
        color="success"
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>Postcode</Typography>}
        variant="outlined"
        size="small"
        color="success"
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>Phone number</Typography>}
        variant="outlined"
        size="small"
        color="success"
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />
      {/* <List>
        {props.items.map((item) => (
          <ItemList item={item} key={item.itemName} />
        ))}
        <Divider />
        {props.uniqueDeliveries.map((delivery) => (
          <DeliverList delivery={delivery} key={delivery.restaurantName} />
        ))}
      </List> */}
      <Stack mt={5} gap={5}>
        <Button
          variant="contained"
          onClick={onSubmitOrder}
          startIcon={<DoneAllIcon color="success" sx={{ scale: "1.3" }} />}
          sx={{ ":hover": { backgroundColor: "secondary.main" } }}
        >
          Submit order
        </Button>
        <Button variant="contained" onClick={props.onClosingCheckout}>
          Back to restaurant
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <Stack>
      <Drawer
        anchor={"bottom"}
        open={props.checkoutVisible}
        onClose={props.onClosingCheckout}
        PaperProps={{
          sx: {
            width: { xs: "90%", sm: 600 },
            height: "90%",
            margin: "auto",
            borderRadius: "5px 5px 0 0",
          },
        }}
      >
        {list()}
      </Drawer>
    </Stack>
  );
};

export default Checkout;
