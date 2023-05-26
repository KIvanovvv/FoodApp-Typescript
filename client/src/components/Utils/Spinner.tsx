import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export default function Spinner() {
  return (
    <Stack>
      <CircularProgress size={240} color="secondary" />
    </Stack>
  );
}
