import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function RatingFilter(props: {
  onSetRatingFilter: (rating: number) => void;
  rating: number;
}) {
  return (
    <Box>
      <Rating
        name="no-value"
        value={props.rating}
        size="large"
        onChange={(event, newValue) => {
          props.onSetRatingFilter(newValue as number);
        }}
        precision={0.5}
      />
    </Box>
  );
}
