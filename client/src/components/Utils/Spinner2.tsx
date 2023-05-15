import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner2() {
  return (
    <Box sx={{ display: "flex" }} mt={10}>
      <CircularProgress size={240} color="secondary" />
    </Box>
  );
}
