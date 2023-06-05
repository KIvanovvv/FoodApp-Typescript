import { Drawer, Stack, Button, TextField, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useNavigate } from "react-router";
import { CartItem } from "../../../context/contextWithReducer/types";
import { UniqueDelivery } from "../../../models/types";
import { useState, useContext } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { CartContext } from "../../../context/contextWithReducer";

const Checkout: React.FC<{
  checkoutVisible: boolean;
  onClosingCheckout: () => void;
  items: CartItem[];
  total: number;
  uniqueDeliveries: UniqueDelivery[];
}> = (props) => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { actions } = useContext(CartContext);

  const onSubmitOrder = () => {
    if (!name || !street || !postcode || !city || !phone) {
      setError(true);
      return;
    }

    navigate("/order", {
      state: {
        deliveryInfo: {
          name,
          street,
          postcode,
          city,
          phone,
          price: props.total.toFixed(2),
          uniqueDeliveries: props.uniqueDeliveries,
        },
      },
    });
    actions.clearCart();
  };
  const list = () => (
    <Stack role="presentation" mt={5} alignItems={"center"} gap={2}>
      <Typography variant="h4" color={"secondary "}>
        Please fill your details
      </Typography>
      {error && (
        <Typography
          variant="h5"
          color={"error"}
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <ErrorIcon sx={{ alignSelf: "center" }} /> All fields are required
        </Typography>
      )}
      <TextField
        id="outlined-basic"
        label={<Typography color={"secondary"}>Name</Typography>}
        variant="outlined"
        size="small"
        color="success"
        onChange={(e) => setName(e.target.value)}
        onClick={() => setError(false)}
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
        onChange={(e) => setCity(e.target.value)}
        onClick={() => setError(false)}
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
        onChange={(e) => setStreet(e.target.value)}
        onClick={() => setError(false)}
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
        onChange={(e) => setPostcode(e.target.value)}
        onClick={() => setError(false)}
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
        onChange={(e) => setPhone(e.target.value)}
        onClick={() => setError(false)}
        inputProps={{
          style: { fontWeight: "bold", color: "#f77f00" },
        }}
      />

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
