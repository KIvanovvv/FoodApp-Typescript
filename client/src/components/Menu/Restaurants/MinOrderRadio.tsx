import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function MinOrderRadio(props: {
  onSetMinOrder: (minOrderPrice: number) => void;
}) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="all"
          control={<Radio color="secondary" />}
          label="Show all"
          componentsProps={{
            typography: { color: "secondary", fontWeight: "bold" },
          }}
          onChange={() => props.onSetMinOrder(0)}
        />
        <FormControlLabel
          value="15"
          control={<Radio color="secondary" />}
          label="15$ or less"
          componentsProps={{
            typography: { color: "secondary", fontWeight: "bold" },
          }}
          onChange={() => props.onSetMinOrder(15)}
        />
        <FormControlLabel
          value="30"
          control={<Radio color="secondary" />}
          label="30$ or less"
          componentsProps={{
            typography: {
              color: "secondary",
              fontWeight: "bold",
            },
          }}
          onChange={() => props.onSetMinOrder(30)}
        />
      </RadioGroup>
    </FormControl>
  );
}
