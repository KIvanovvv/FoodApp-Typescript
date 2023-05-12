import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SavingsIcon from "@mui/icons-material/Savings";
import RatingScale from "./RatingScale";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ListRestourant2: React.FC<{
  cardImageUrl: string;
  pageImageUrl: string;
  name: string;
  rating: number[];
  minOrder: number;
  delivery: number;
  freeDelivery: number;
  _id: string;
  status: string;
}> = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        padding: "10px 40px ",
        cursor: "pointer",
        backgroundColor: "secondary.main",
        maxWidth: "620px",
        //alignSelf: "center",
      }}
    >
      <CardHeader
        title={
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h4" fontWeight={"bold"}>
              {props.name}
            </Typography>
            <Typography
              variant="body1"
              display={"flex"}
              fontWeight={"bold"}
              gap={1}
            >
              <AccessTimeIcon
                display={"flex"}
                sx={{ color: props.status === "Open" ? "green" : "red" }}
              />{" "}
              {props.status}
            </Typography>
          </Stack>
        }
        titleTypographyProps={{ variant: "h4", fontWeight: "bold" }}
        subheader={<RatingScale rating={props.rating} />}
        sx={{
          padding: 0,
          marginBottom: "5px",
        }}
      />

      <Stack direction={"row"} gap={1}>
        <CardMedia
          component="img"
          height="200"
          image={props.cardImageUrl}
          alt={props.name}
          sx={{ borderRadius: "5px", objectFit: "contain" }}
        />
        <Stack
          direction={"column"}
          alignContent={"center"}
          justifyContent={"center"}
          spacing={2}
          sx={{ padding: "0 10px" }}
        >
          <Typography
            variant="body1"
            noWrap={true}
            fontWeight={"bold"}
            display={"flex"}
            alignContent={"center"}
            gap={1}
          >
            <ShoppingBasketIcon sx={{ color: "white" }} /> Min. order:{" "}
            {props.minOrder}$
          </Typography>
          <Typography
            variant="body1"
            noWrap={true}
            fontWeight={"bold"}
            display={"flex"}
            alignContent={"center"}
            gap={1}
          >
            <DeliveryDiningIcon sx={{ color: "white" }} /> Delivery price:{" "}
            {props.delivery}$
          </Typography>
          <Typography
            variant="body1"
            noWrap={true}
            fontWeight={"bold"}
            display={"flex"}
            alignContent={"center"}
            gap={1}
          >
            <SavingsIcon color="success" fontSize="medium" /> Free delivery
            over:{" "}
            <Typography display={"flex"} variant="body1" fontWeight={"bold"}>
              {props.freeDelivery}$
            </Typography>
          </Typography>
        </Stack>
      </Stack>

      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};

export default ListRestourant2;
