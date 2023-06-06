import { useNavigate } from "react-router-dom";
import classes from "./SelectionOptions.module.css";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./SelectionOptions.styles";
import { selectionOptions } from "./SelectionOptions.model";

const { card, imageContainer } = styles;

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
      <Box sx={imageContainer} onClick={props.onClick}>
        <img
          src={props.option.img}
          className={classes.img}
          alt={props.option.name}
        />
      </Box>
      <Typography color="inherit" variant="subtitle1">
        {props.option.name}
      </Typography>
    </Stack>
  );
}

const SelectionOptions = () => {
  const navigate = useNavigate();
  return (
    <Stack gap={4} alignItems="center">
      {Object.values(selectionOptions).map((row, i) => (
        <Stack gap={5} direction="row" key={i}>
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
