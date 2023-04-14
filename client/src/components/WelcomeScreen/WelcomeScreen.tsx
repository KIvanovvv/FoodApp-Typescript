import classes from "./WelcomeScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import pizzaImg from "../../resources/pizza.png";
import { useState } from "react";
import SelectionOptions from "./SelectionOptions";
import { Stack, Typography, Box } from "@mui/material";
import styles from "./WelcomeScreen.styles";

const { wrapper, header } = styles


const WelcomeScreen = () => {
  const [selectionVisible, setSelectionVisible] = useState(false);
  return (
    <Stack sx={wrapper} >
      <Stack sx={header}>
        <Stack gap={3} direction='row'>
          <Typography variant='h2' >Welcome to FoodApp</Typography>
          <FontAwesomeIcon
            icon={faDrumstickBite}
            className={classes.icon}
            color='#eae2b7'
            size="4x"
          />
        </Stack>
        <Typography variant='h4'>
          Order delicious food with few clicks
        </Typography>
      </Stack>
      {!selectionVisible ? <Box>
          <img
            src={pizzaImg}
            className={classes.pizza}
            onClick={() => setSelectionVisible(true)}
            alt=""
          />
      </Box> : <SelectionOptions />}
    </Stack>
  );
};

export default WelcomeScreen;
