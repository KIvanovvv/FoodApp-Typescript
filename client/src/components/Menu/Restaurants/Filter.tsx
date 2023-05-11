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
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort by"
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"Delivery price"}>Delivery price</MenuItem>
          <MenuItem value={"Rating"}>Rating</MenuItem>
          <MenuItem value={"Min order"}>Min order</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
