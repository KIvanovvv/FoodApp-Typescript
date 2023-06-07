import { MenuHeaderProps } from "../../models/types";
import { Stack, Typography } from "@mui/material";
import RatingScale from "../Menu/Restaurants/RatingScale";
import classes from "./RestaurantMenu.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const MenuHeader: React.FC<MenuHeaderProps> = (props) => {
  return (
    <Stack gap={2} margin={"auto"}>
      <Stack maxHeight={200} overflow={"hidden"} justifyContent={"center"}>
        <img
          src={props.pageImageUrl}
          alt={props.name}
          className={classes.background}
        ></img>
      </Stack>
      <Stack bgcolor={"primary.main"} gap={2} pl={{ xs: 0, md: 10 }}>
        <Stack
          direction={{
            xl: "column",
            lg: "column",
            md: "column",
            sm: "row",
            xs: "row",
          }}
          justifyContent={"center"}
          gap={{ xl: 0, lg: 0, md: 0, sm: 5, xs: 2 }}
        >
          <Typography variant="h4" fontWeight={"bold"} noWrap>
            {props.name}
          </Typography>
          <Stack pl={{ xs: 0, md: 10 }} justifyContent={"center"}>
            <RatingScale rating={props.rating} />
          </Stack>
        </Stack>
        <Stack
          direction={{
            xl: "column",
            lg: "column",
            md: "column",
            sm: "row",
            xs: "row",
          }}
          justifyContent={"center"}
          gap={{ xl: 0, lg: 0, md: 0, sm: 5, xs: 2 }}
          pl={{ xs: 0, md: 20 }}
        >
          <Stack
            direction={{
              xl: "row",
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            }}
            gap={{ xl: 3, lg: 3, md: 3, sm: 5, xs: 1 }}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              gap={{ xl: 3, lg: 3, md: 3, sm: 5, xs: 2 }}
            >
              <Stack direction={"row"} gap={1}>
                <ShoppingBasketIcon sx={{ color: "white" }} fontSize="small" />
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
                <DeliveryDiningIcon sx={{ color: "white" }} fontSize="small" />
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
            </Stack>
            <Stack direction={"row"} gap={1}>
              <CardGiftcardIcon sx={{ color: "white" }} fontSize="small" />
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
      </Stack>
    </Stack>
  );
};
export default MenuHeader;
