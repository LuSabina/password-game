const useStyles = () => ({
  appname: {
    //position: "relative",
    height: "60px",
    justifyContent: "center",
    backgroundColor: "#6482AD",
  },
  toolbartext: {
    fontFamily: "Raleway",
    fontSize: "20px",
    caretColor: "transparent",
    color: "white",
    textTransform: "lowercase",
  },

  icon: {
    position: "absolute",
    justifyContent: "left",
  },

  stack: {
    alignItems: "center",
  },

  heading: {
    padding: "20px",
    fontWeight: "thin",
    fontFamily: "Raleway",
    caretColor: "transparent",
    color: "#3C3D37",
    fontSize: "60px",
  },
  condition: {
    width: "40%",
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
  inputName: {
    width: "30%",
  },
  subbutton: {
    width: "15%",
    backgroundColor: "#7FA1C3",
  },
  githubIcon: {
    color: "white",
    fontSize: "35px",
  },
  footer: {
    width: "100%",
    height: "50px",
    backgroundColor: "#7FA1C3",
    position: "fixed",
    bottom: "0",
  },
  footerText: {
    color: "white",
    fontFamily: "Raleway",
    fontWeight: "700",
  },
  footerStack: {
    alignItems: "center",
    justifyContent: "space-between",
    mx: 4,
  },
});

export default useStyles;
