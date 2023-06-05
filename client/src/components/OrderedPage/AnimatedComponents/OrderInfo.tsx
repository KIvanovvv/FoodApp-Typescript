import { Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

const OrderInfo: React.FC<{
  name: string;
  city: string;
  street: string;
  postcode: string;
  phone: string;
  price: number;
  deliveryTime: number;
}> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Deliver to
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.name}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          City
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.city}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Street
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.street}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Postcode
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.postcode}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Phone
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.phone}
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Appr. delivery time
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          {props.deliveryTime} min.
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={5} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          Total price
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} color={"secondary"}>
          ${Number(props.price).toFixed(2)}
        </Typography>
      </Stack>
    </motion.div>
  );
};

export default OrderInfo;
