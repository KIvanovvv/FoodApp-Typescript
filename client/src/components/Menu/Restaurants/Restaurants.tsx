import classes from "./Restaurants.module.css";
const testImgUrl =
  "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1610955877/static-takeaway-com/images/generic/heroes/351/351_lunch_6";
const Restaurants = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <div className={classes.search_container}>
          <input
            placeholder="Search for restaurant ..."
            type="text"
            className={classes.input}
          />
        </div>
        <div className={classes.filter_container}>
          <p>Sort by:</p>
          <select className={classes.select}>
            <option>Name</option>
            <option>Delivery price</option>
            <option>Rating</option>
            <option>Min order</option>
          </select>
        </div>
      </div>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes.img_container}>
            <img src={testImgUrl} alt="" className={classes.img} />
          </div>
          <div className={classes.info_container}>
            <div className={classes.name_container}>
              <p className={classes.name}>Name</p>
              <p className={classes.review}>Review</p>
            </div>
            <div className={classes.pricing_container}>
              <p className={classes.min_order}>Min order: 10$</p>
              <p className={classes.delivery_price}>Delivery price: 5$</p>
              <p className={classes.free_delivery}>Free delivery over: 50$</p>
            </div>
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.img_container}>
            <img src={testImgUrl} alt="" />
          </div>
          <div className={classes.info_container}>
            <div className={classes.name_container}>
              <p className={classes.name}>Name</p>
              <p className={classes.review}>Review</p>
            </div>
            <div className={classes.pricing_container}>
              <p className={classes.min_order}>Min order: 10$</p>
              <p className={classes.delivery_price}>Delivery price: 5$</p>
              <p className={classes.free_delivery}>Free delivery over: 50$</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Restaurants;
