import { List, ListItem, ListItemText } from "@mui/material";


const TotalPriceList = (props:{total:number}) => {
  return  <List>
  <ListItem disablePadding>
    <ListItemText
      primary={`Total Price`}
      primaryTypographyProps={{ fontWeight: "bold", fontSize: 22 }}
      secondary={`$${props.total.toFixed(2)}`}
      secondaryTypographyProps={{
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
      }}
    />
  </ListItem>
</List>
};

export default TotalPriceList;
