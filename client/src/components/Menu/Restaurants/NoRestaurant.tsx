import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import sadImg from "../../../resources/sad.png";

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

export const NoRestaurant = () => {
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
      }}
    >
      <CardHeader
        title={
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h5" fontWeight={"bold"}>
              There is no restaurant matching your search.
            </Typography>
          </Stack>
        }
        titleTypographyProps={{ variant: "h4", fontWeight: "bold" }}
        sx={{
          padding: 0,
          marginBottom: "5px",
        }}
      />

      <Stack
        direction={"row"}
        gap={1}
        maxWidth={300}
        alignItems={"center"}
        sx={{ margin: "auto" }}
      >
        <CardMedia
          component="img"
          height="200"
          image={sadImg}
          alt={"404 sad face"}
          sx={{
            borderRadius: "5px",
            objectFit: "contain",
            backgroundColor: "primary.main",
            padding: "10px",
          }}
        />
      </Stack>
    </Card>
  );
};

export default NoRestaurant;
