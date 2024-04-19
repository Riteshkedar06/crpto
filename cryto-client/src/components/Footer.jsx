import React from "react";
import {Grid,Link,Typography,Divider} from '@mui/material';
import {makeStyles} from "@mui/styles"
// import logo from "../../images/logo.png";

// // import logo from "../../images/logo.png";

const footerStyles = {
  root: {
    width: "100%",
    padding: "16px",
    background: "#3f51b5",
    color: "#fff",
  },
  menuItem: {
    cursor: "pointer",
    margin: "0 8px",
    textDecoration: "none",
    color: "inherit",
  },
  divider: {
    marginTop: "20px",
  },
};

const Footer = () => {
  return (
    <div style={footerStyles.root}>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6} container justify="center" alignItems="center">
          {/* <img src={logo} alt="logo" className="w-32" /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Link href="#" variant="body1" style={footerStyles.menuItem}>
                Market
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body1" style={footerStyles.menuItem}>
                Exchange
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body1" style={footerStyles.menuItem}>
                Tutorials
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body1" style={footerStyles.menuItem}>
                Wallets
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center" style={footerStyles.divider}>
        <Typography variant="body2">Bharati vidyapeeth college of Engineering</Typography>
        <Typography variant="body2" style={footerStyles.menuItem}>
          krypto.com
        </Typography>
      </Grid>
      <Divider style={footerStyles.divider} />
      <Grid container justify="space-between" alignItems="center" style={footerStyles.divider}>
        <Typography variant="body2"></Typography>
        <Typography variant="body2">All rights reserved</Typography>
      </Grid>
    </div>
  );
};

export default Footer;