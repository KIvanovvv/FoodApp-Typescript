import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Headline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        Your order has been placed
      </Typography>
    </motion.div>
  );
};

export default Headline;
