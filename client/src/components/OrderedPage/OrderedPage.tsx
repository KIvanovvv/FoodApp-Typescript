import { useContext, useState } from "react";
import Header from "../Header/Header";
import classes from "./OrderedPage.module.css";
import { CartContext } from "../../context/contextWithReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import Menu from "../Menu/Menu";
import { submitRating } from "../../services/restaurantServices";

const OrderedPage = () => {
  const { items } = useContext(CartContext);
  const [firstStar, setFirstStar] = useState(false);
  const [secondStar, setSecondStar] = useState(false);
  const [thirdStar, setThirdStar] = useState(false);
  const [fourthStar, setFourthStar] = useState(false);
  const [fifthStar, setFifthStar] = useState(false);
  const [stars, setStars] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitingRating, setSubmitingRating] = useState(false);

  const location = useLocation();
  if (!location.state) {
    return <Menu />;
  }
  const { name, city, postcode, street, phone, price, uniqueDeliveries } =
    location.state.deliveryInfo;
  const onFirstStarClick = () => {
    setFirstStar(true);
    setSecondStar(false);
    setThirdStar(false);
    setFourthStar(false);
    setFifthStar(false);
    setStars(1);
  };
  const onSecondStarClick = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(false);
    setFourthStar(false);
    setFifthStar(false);
    setStars(2);
  };
  const onThirdStarClick = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
    setFourthStar(false);
    setFifthStar(false);
    setStars(3);
  };
  const onFourthStarClick = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
    setFourthStar(true);
    setFifthStar(false);
    setStars(4);
  };
  const onFifthStarClick = () => {
    setFirstStar(true);
    setSecondStar(true);
    setThirdStar(true);
    setFourthStar(true);
    setFifthStar(true);
    setStars(5);
  };
  const onSubmitRating = async () => {
    setSubmitingRating(true);
    await submitRating(stars, uniqueDeliveries);
    console.log(stars);
    console.log(uniqueDeliveries);

    setIsSubmitted(true);
  };

  return (
    <div className={classes.wrapper}>
      <Header items={items} />
      <div className={classes.main}>
        <div className={classes.header_container}>
          <FontAwesomeIcon
            icon={faCheck}
            className={classes.checkIcon}
            size="10x"
          />
          <div className={classes.headline_container}>
            <p className={classes.thanks_tag}>Thank you !</p>
            <p> Your order has been placed .</p>
          </div>
        </div>
        <div className={classes.details_container}>
          <p className={classes.tags}>
            Deliver to: <span>{name}</span>
          </p>
          <p className={classes.tags}>
            City: <span>{city}</span>
          </p>
          <p className={classes.tags}>
            Street: <span>{street}</span>
          </p>
          <p className={classes.tags}>
            Postcode: <span>{postcode}</span>
          </p>
          <p className={classes.tags}>
            Phone: <span>{phone}</span>
          </p>
          <p className={classes.tags}>
            Approximate delivery time{" "}
            <span>{`${10 + Math.trunc(Math.random() * 40)} min.`}</span>
          </p>
          <p className={classes.tags}>
            Total price: <span>{price}$</span>
          </p>
        </div>
        <div className={classes.rating_container}>
          {!isSubmitted && (
            <>
              <div className={classes.stars_container}>
                <p>Rate:</p>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      fifthStar ? classes.icon_clicked : classes.icon_star
                    }
                    onClick={onFifthStarClick}
                  />

                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      fourthStar ? classes.icon_clicked : classes.icon_star
                    }
                    onClick={onFourthStarClick}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      thirdStar ? classes.icon_clicked : classes.icon_star
                    }
                    onClick={onThirdStarClick}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      secondStar ? classes.icon_clicked : classes.icon_star
                    }
                    onClick={onSecondStarClick}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={
                      firstStar ? classes.icon_clicked : classes.icon_star
                    }
                    onClick={onFirstStarClick}
                  />
                </div>
              </div>
              <button className={classes.btn_rating} onClick={onSubmitRating}>
                Submit rating
              </button>
            </>
          )}
          {isSubmitted && (
            <div className={classes.submitted}>
              Your rating has been submitted!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderedPage;
