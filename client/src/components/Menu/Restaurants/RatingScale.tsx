import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

const labels: { [index: string]: string } = {
  0.5: "Terrible",
  1: "Bad",
  1.5: "Poor",
  2: "Unsatisfying",
  2.5: "Okayish",
  3: "Ok",
  3.5: "Good",
  4: "Very Good",
  4.5: "Excellent",
  5: "Perfect",
};

export default function RatingScale(props: { rating: number[] }) {
  const score =
    props.rating.reduce((a, b) => {
      return a + b;
    }, 0) / props.rating.length;

  const value = Math.round(score * 2) / 2;

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography
        variant={"body2"}
        sx={{ ml: 2 }}
        fontWeight={"bold"}
        noWrap
        overflow={"visible"}
      >
        {labels[value]}
      </Typography>
    </Box>
  );
}
