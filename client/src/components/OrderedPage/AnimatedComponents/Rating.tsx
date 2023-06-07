import { motion } from "framer-motion";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import RatingFilter from "../../Menu/Restaurants/RatingFilter";

const Rating: React.FC<{
  rating: number;
  setRating: (rating: number) => void;
  onSubmit: () => void;
  isSubmitted: boolean;
  submittingRating: boolean;
}> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Stack alignItems={"center"}>
        <Typography variant="h5" fontWeight={"bold"}>
          Leave a rating
        </Typography>{" "}
        <RatingFilter
          rating={props.rating}
          onSetRatingFilter={props.setRating}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={props.onSubmit}
          disabled={props.isSubmitted}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Submit
          </Typography>
        </Button>
      </Stack>
    </motion.div>
  );
};

export default Rating;
