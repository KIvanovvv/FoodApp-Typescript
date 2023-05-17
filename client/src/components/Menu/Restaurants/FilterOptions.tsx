import { IconButton, Stack, Switch, Tooltip, Typography } from "@mui/material";
import MinOrderRadio from "./MinOrderRadio";
import RatingFilter from "./RatingFilter";
import InfoIcon from "@mui/icons-material/Info";

const FilterOptions: React.FC<{
  totalRestaurants: number;
  showOnlyOpen: boolean;
  toggleShowOpen: () => void;
  showOnlyFreeDelivery: boolean;
  toggleShowFreeDelivery: () => void;
  setMinOrderPrice: (minOrderPrice: number) => void;
  onSetRatingFilter: (rating: number) => void;
}> = (props) => {
  return (
    <>
      <Stack alignSelf={"start"} position={"sticky"} top={190} gap={3} mt={5}>
        <Typography variant="h6" fontWeight={"bold"} noWrap color={"secondary"}>
          {props.totalRestaurants} restaurants
        </Typography>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          noWrap
          color={"secondary"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          Open now <Switch color="secondary" onChange={props.toggleShowOpen} />
        </Typography>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          noWrap
          color={"secondary"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          Free delivery{" "}
          <Switch
            color="secondary"
            value={props.showOnlyFreeDelivery}
            onChange={props.toggleShowFreeDelivery}
          />
        </Typography>
        <Stack>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            noWrap
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
          <MinOrderRadio onSetMinOrder={props.setMinOrderPrice} />
        </Stack>
        <Stack>
          <Typography variant="h6" fontWeight={"bold"} color={"secondary"}>
            Rating
          </Typography>
          <RatingFilter onSetRatingFilter={props.onSetRatingFilter} />
        </Stack>
      </Stack>
    </>
  );
};

export default FilterOptions;
