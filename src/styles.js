const useStyles = () => ({
  appname: {
    position: "relative",
    height: "40px",
    justifyContent: "center",
  },
  toolbartext: {
    fontFamily: "Raleway",
    fontSize: "15px",
    caretColor: "transparent",
  },

  icon: {
    position: "absolute",
    justifyContent: "left",
  },

  stack: {
    width: "50%",
  },

  heading: {
    padding: "20px",
    fontWeight: "thin",
    fontFamily: "Raleway",
    caretColor: "transparent",
    color: "#3C3D37",
  },
  condition: {
    width: "50%",
    height: "40px",
    borderRadius: "4px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: "10px",
    boxShadow: 1,
    fontFamily: "Raleway",
    caretColor: "transparent",
  },
  ifgreen: {
    color: "#1A5319",
    backgroundColor: "#80AF81",
  },
  ifred: {
    color: "#A91D3A",
    backgroundColor: "#C73659",
  },
});

export default useStyles;
