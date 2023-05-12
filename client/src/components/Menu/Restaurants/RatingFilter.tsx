import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RatingFilter() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box>
      <Rating
        name="no-value"
        value={value}
        size="large"
        onChange={(e, value) => setValue(value)}
        precision={0.5}
      />
    </Box>
  );
}
