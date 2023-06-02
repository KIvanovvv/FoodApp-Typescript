import { Drawer, Box, Stack, Button } from "@mui/material";

const Checkout: React.FC<{
  checkoutVisible: boolean;
  onClosingCheckout: () => void;
}> = (props) => {
  const list = () => (
    <Stack
      role="presentation"
      //   onClick={toggleCart(anchor, false)}
      //   onKeyDown={toggleCart(anchor, false)}
    >
      <p>Working</p>
      <p>Working</p>
      <p>Working</p>
      <p>Working</p>
      <p>Working</p>
      <p>Working</p>
      <p>Working</p>
      <Button onClick={props.onClosingCheckout}>Submit order</Button>
      <Button onClick={props.onClosingCheckout}>Back to restaurant</Button>
    </Stack>
  );

  return (
    <Stack>
      <Drawer
        anchor={"bottom"}
        open={props.checkoutVisible}
        onClose={props.onClosingCheckout}
        PaperProps={{
          sx: {
            width: { xs: "90%", sm: 600 },
            height: "90%",
            margin: "auto",
            borderRadius: "5px 5px 0 0",
          },
        }}
      >
        {list()}
      </Drawer>
    </Stack>
  );
};

export default Checkout;
