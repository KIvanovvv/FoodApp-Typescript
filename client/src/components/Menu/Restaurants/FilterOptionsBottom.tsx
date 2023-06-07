import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography, Stack, Tooltip, IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import MinOrderRadio from "./MinOrderRadio";
import InfoIcon from "@mui/icons-material/Info";
import RatingFilter from "./RatingFilter";

const FilterOptionsBottom: React.FC<{
  open: boolean;
  onCloseFilter: () => void;
  totalRestaurants: number;
  showOnlyOpen: boolean;
  toggleShowOpen: () => void;
  showOnlyFreeDelivery: boolean;
  toggleShowFreeDelivery: () => void;
  setMinOrderPrice: (minOrderPrice: number) => void;
  minOrderPrice: number;
  onSetRatingFilter: (rating: number) => void;
  ratingFilter: number;
}> = (props) => {
  const list = () => (
    <Box sx={{ width: "100%", padding: "20px 30px" }} role="presentation">
      <Typography
        variant="h6"
        fontWeight={"bold"}
        color={"secondary"}
        justifyContent={"center"}
        display={"flex"}
      >
        {props.totalRestaurants} restaurants
      </Typography>
      <Typography
        variant={"body1"}
        fontWeight={"bold"}
        color={"secondary"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        Open now{" "}
        <Switch
          color="secondary"
          onChange={props.toggleShowOpen}
          checked={props.showOnlyOpen}
        />
      </Typography>
      <Typography
        variant="body1"
        fontWeight={"bold"}
        color={"secondary"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        Free delivery{" "}
        <Switch
          color="secondary"
          checked={props.showOnlyFreeDelivery}
          onChange={props.toggleShowFreeDelivery}
        />
      </Typography>
      <Stack>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          color={"secondary"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          Minimal ordering price{" "}
          <Tooltip title="This is the minimal ordering price for the restaurant.   ">
            <IconButton aria-label="info">
              <InfoIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </Typography>
        <MinOrderRadio
          onSetMinOrder={props.setMinOrderPrice}
          orderPrice={props.minOrderPrice}
        />
      </Stack>
      <Stack>
        <Typography variant="body1" fontWeight={"bold"} color={"secondary"}>
          Rating
        </Typography>
        <RatingFilter
          onSetRatingFilter={props.onSetRatingFilter}
          rating={props.ratingFilter}
        />
      </Stack>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"bottom"} open={props.open} onClose={props.onCloseFilter}>
        {list()}
      </Drawer>
    </div>
  );
};

export default FilterOptionsBottom;
