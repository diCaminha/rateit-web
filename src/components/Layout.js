import { makeStyles, Toolbar } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Toolbar />
      <div className={classes.container}>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
