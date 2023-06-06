import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RatingScale from "./RatingScale";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ListRestourant: React.FC<{
  cardImageUrl: string;
  pageImageUrl: string;
  name: string;
  rating: number[];
  minOrder: number;
  delivery: number;
  freeDelivery: number;
  _id: string;
  status: string;
}> = (props) => {
  const navigate = useNavigate();
  const onListClickHandler = () => {
    navigate(`/restaurant/${props._id}`);
  };
  return (
    <Card
      sx={{
        padding: { xs: "10 0", sm: "10px 20px ", lg: "10px 40px " },
        cursor: "pointer",
        backgroundColor: "secondary.main",
        maxWidth: "620px",
      }}
      onClick={onListClickHandler}
    >
      <CardHeader
        title={
          <Stack
            direction={"row"}
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              {props.name}
            </Typography>
            <Typography
              variant="body1"
              display={"flex"}
              fontWeight={"bold"}
              gap={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <AccessTimeIcon
                display={"flex"}
                sx={{ color: props.status === "Open" ? "#189439" : "red" }}
              />{" "}
              {props.status}
            </Typography>
          </Stack>
        }
        titleTypographyProps={{ variant: "h4", fontWeight: "bold" }}
        subheader={<RatingScale rating={props.rating} />}
        sx={{
          padding: 0,
          marginBottom: "5px",
        }}
      />

      <Stack direction={{ md: "row" }} gap={1}>
        <CardMedia
          component="img"
          height="200"
          image={props.cardImageUrl}
          alt={props.name}
          sx={{ borderRadius: "5px", objectFit: "contain" }}
        />
        <Stack
          direction={"column"}
          alignContent={"center"}
          justifyContent={"center"}
          spacing={2}
          sx={{ padding: "0 10px" }}
        >
          <Stack direction={"row"} gap={1}>
            <Typography
              variant="body1"
              display={"flex"}
              fontWeight={"bold"}
              gap={1}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <AccessTimeIcon
                display={"flex"}
                sx={{ color: props.status === "Open" ? "#189439" : "red" }}
              />{" "}
              {props.status}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <ShoppingBasketIcon sx={{ color: "white" }} />
            <Typography
              variant="body1"
              noWrap={true}
              fontWeight={"bold"}
              display={"flex"}
              alignContent={"center"}
              gap={1}
            >
              Min. order: {props.minOrder}$
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <DeliveryDiningIcon sx={{ color: "white" }} />
            <Typography
              variant="body1"
              noWrap={true}
              fontWeight={"bold"}
              display={"flex"}
              alignContent={"center"}
              gap={1}
            >
              Delivery price: {props.delivery}$
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <CardGiftcardIcon sx={{ color: "white" }} fontSize="medium" />
            <Typography
              variant="body1"
              noWrap={true}
              fontWeight={"bold"}
              display={"flex"}
              alignContent={"center"}
              gap={1}
            >
              Free delivery over: {props.freeDelivery}${" "}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ListRestourant;
