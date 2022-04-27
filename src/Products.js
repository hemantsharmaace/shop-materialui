import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Products(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        {props.myproductdata.length !== 0 ? (
          <>
            {Object.entries(props.myproductdata).map((prod) => {
              //  console.log(prod[1]);
              //return <SingleProduct singleprod={prod[1]} />;
            })}
          </>
        ) : (
          <p> No product available </p>
        )}
        {/* {props.myproductdata.length !== 0 ? (
          <>
            {Object.entries(props.myproductdata).map((prod) => {
              //  console.log(prod[1]);
              return <SingleProduct singleprod={prod[1]} />;
            })}
          </>
        ) : (
          <p> No product is available </p>
        )} */}
      </Grid>
    </Grid>
  );
}

export default Products;
