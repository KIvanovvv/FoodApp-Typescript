import classes from "./WelcomeScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import pizzaImg from "../../resources/pizza.png";
import { useState } from "react";
import SelectionOptions from "./SelectionOptions";
import { Stack, Typography } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useEffect } from "react";

const WelcomeScreen = () => {
  const [selectionVisible, setSelectionVisible] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const flagTimeout = () => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  };
  useEffect(() => {
    flagTimeout();
  }, []);
  return (
    <Stack height={"100vh"} bgcolor={"primary.main"} overflow={"hidden"}>
      <Stack>
        <Stack
          gap={{ xs: 0, sm: 2 }}
          direction={{ xs: "column", sm: "row" }}
          mt={5}
          justifyContent={"center"}
        >
          <Typography
            variant="h2"
            noWrap
            overflow={"visible"}
            fontWeight={"bold"}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Welcome to
          </Typography>
          <Typography
            variant="h2"
            noWrap
            overflow={"visible"}
            fontWeight={"bold"}
            color={"secondary"}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            FoodApp{" "}
            <FontAwesomeIcon
              icon={faDrumstickBite}
              className={classes.icon}
              color="secondary"
              size="1x"
            />
          </Typography>
        </Stack>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Order delicious food with few clicks
        </Typography>
      </Stack>
      {!selectionVisible ? (
        <Stack
          alignItems={"center"}
          alignContent={"center"}
          mt={{ xs: 0, sm: 0 }}
          sx={{
            borderRadius: "50%",
          }}
        >
          <img
            src={pizzaImg}
            className={classes.pizza}
            onClick={() => setSelectionVisible(true)}
            alt=""
          />
          {showArrow && (
            <Stack alignItems={"center"}>
              <KeyboardDoubleArrowUpIcon
                sx={{
                  color: "success.main",
                  animation: `${classes.bounce} 1s infinite`,
                  transform: "rotate(270deg)",
                  fontSize: "4rem",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                fontWeight={"bold"}
                pb={5}
              >
                Click the pizza
              </Typography>
            </Stack>
          )}
        </Stack>
      ) : (
        <SelectionOptions />
      )}
    </Stack>
  );
};

export default WelcomeScreen;
