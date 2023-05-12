import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Filter(props: {
  onSelectFilter: (filter: string) => void;
}) {
  const [filter, setFilter] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    props.onSelectFilter(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" color="success">
          Sort by
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort by"
          value={filter}
          onChange={handleChange}
          color="success"
          sx={{ fontWeight: "bold", color: "#f77f00" }}
        >
          <MenuItem value={"Name"} sx={{ color: "#f77f00" }}>
            Name
          </MenuItem>
          <MenuItem value={"Delivery price"} sx={{ color: "#f77f00" }}>
            Delivery price
          </MenuItem>
          <MenuItem value={"Rating"} sx={{ color: "#f77f00" }}>
            Rating
          </MenuItem>
          <MenuItem value={"Min order"} sx={{ color: "#f77f00" }}>
            Min order
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
