import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const CheckMark = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {" "}
      <CheckCircleOutlineIcon
        sx={{
          fontSize: { xs: "200px", sm: "300px", md: "300px" },
        }}
        color="success"
      />
    </motion.div>
  );
};

export default CheckMark;
