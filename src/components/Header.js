import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;