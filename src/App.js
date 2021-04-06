import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./components/homepage/header/Header";
import Banner from "./components/homepage/banner/banner"
const App = () => {
  return (
    <Grid container direction="column" >
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Banner />

        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
