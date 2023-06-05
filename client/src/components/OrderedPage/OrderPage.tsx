import { Button, Stack, Typography } from "@mui/material";
import Header from "../Header/Header";
import CheckMark from "./AnimatedComponents/CheckMark";
import Headline from "./AnimatedComponents/Headline";
import OrderInfo from "./AnimatedComponents/OrderInfo";
import Rating from "./AnimatedComponents/Rating";
import { useState, useEffect } from "react";
import { submitRating } from "../../services/restaurantServices";
import { useLocation } from "react-router";
import Menu from "../Menu/Menu";
const OrderPage = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitingRating, setSubmitingRating] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(
    10 + Math.trunc(Math.random() * 40)
  );
  const location = useLocation();
  if (!location.state) {
    return <Menu />;
  }
  const { name, city, postcode, street, phone, price, uniqueDeliveries } =
    location.state.deliveryInfo;

  const onSetRatingFilter = (rating: number) => {
    setRating(rating);
  };
  const onSubmit = async () => {
    setSubmitted(true);
    setSubmitingRating(true);
    await submitRating(rating, uniqueDeliveries);
    setSubmitingRating(false);
  };

  return (
    <>
      <Header />
      <Stack alignItems={"center"} gap={3}>
        <CheckMark />
        <Headline />
        <OrderInfo
          city={city}
          name={name}
          phone={phone}
          postcode={postcode}
          price={price}
          street={street}
          deliveryTime={deliveryTime}
        />
        {!submitted && (
          <Rating
            rating={rating}
            setRating={onSetRatingFilter}
            onSubmit={onSubmit}
            isSubmitted={submitted}
            submittingRating={submitingRating}
          />
        )}
        {submitted && (
          <Typography variant="h5" fontWeight={"bold"} color={"success.main"}>
            Thank you for your feedback!
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default OrderPage;
