import { useNavigate } from "react-router-dom";
import classes from "./SelectionOptions.module.css";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./SelectionOptions.styles";
import { selectionOptions } from "./SelectionOptions.model";

const { card } = styles;

function SelectionOption(props: {
  onClick: () => void;
  option:
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number }
    | { path: string; img: any; name: string; row: number };
}) {
  return (
    <Stack sx={card} mt={5}>
      <Box onClick={props.onClick}>
        <img
          src={props.option.img}
          className={classes.img}
          alt={props.option.name}
        />
      </Box>
      <Typography color="inherit" variant="subtitle1" fontWeight={"bold"}>
        {props.option.name}
      </Typography>
    </Stack>
  );
}

const SelectionOptions = () => {
  const navigate = useNavigate();
  return (
    <Stack gap={{ xs: 0, sm: 4 }} alignItems="center">
      {Object.values(selectionOptions).map((row, i) => (
        <Stack gap={{ xs: 3, sm: 8 }} direction="row" key={i}>
          {row.map((option) => (
            <SelectionOption
              key={option.name}
              onClick={() => navigate(option.path)}
              option={option}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default SelectionOptions;
