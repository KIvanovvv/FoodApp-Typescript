import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingFilter(props: {
  onSetRatingFilter: (rating: number) => void;
  rating: number;
}) {
  // const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box>
      <Rating
        name="no-value"
        value={props.rating}
        size="large"
        onChange={(event, newValue) => {
          // setValue(newValue);
          props.onSetRatingFilter(newValue as number);
        }}
        precision={0.5}
      />
    </Box>
  );
}
