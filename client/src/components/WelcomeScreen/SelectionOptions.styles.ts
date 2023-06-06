const card = {
  backgroundColor: "#f77f00",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "70px",
  maxWidth: "100px",
  maxHeight: "100px",
  color: "#eae2b7",
  fontWeight: 500,
  animation: "items 0.5s ease-in-out",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#eae2b7",
    color: "#f77f00",
    "&:hover > div": {
      animation: "food-spin 20s linear infinite",
      "@keyframes food-spin": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  "@media (max-width: 1600px)": {
    padding: "60px",
  },
  "@media (max-width: 600px)": {
    padding: "50px",
  },
};

export default { card };
