import {
  IconButton,
  Stack,
  Switch,
  Tooltip,
  Typography,
  typographyClasses,
} from "@mui/material";
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
  minOrderPrice: number;
  onSetRatingFilter: (rating: number) => void;
  ratingFilter: number;
}> = (props) => {
  return (
    <>
      <Stack
        alignSelf={"start"}
        position={"sticky"}
        top={190}
        gap={3}
        mt={5}
        display={{ xs: "none", md: "flex" }}
      >
        <Typography variant="body1" fontWeight={"bold"} color={"secondary"}>
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
      </Stack>
    </>
  );
};

export default FilterOptions;
