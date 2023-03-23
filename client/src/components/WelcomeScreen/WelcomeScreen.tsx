import classes from "./WelcomeScreen.module.css";

const WelcomeScreen = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p>Welocme to FoodApp !</p>
        <p>Delicious food await's you within few clicks</p>
      </div>
      <div className={classes.main}></div>
    </div>
  );
};

export default WelcomeScreen;
