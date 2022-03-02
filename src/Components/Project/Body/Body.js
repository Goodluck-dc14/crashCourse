import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";
import { useQuery } from "react-query";
import axios from "axios";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
    flexDirection: "column",
    marginLeft: "20%",
  },
});

const Body = () => {
  const classes = useStyles();
  const { data, isLoading } = useQuery("data", () => {
    const url = "https://fakestoreapi.com/products";
    const res = axios.get(url);
    return res;
  });
  console.log(data);

  return (
    <div>
      this is the body page
      <Grid container spacing={2}>
        {data?.data?.map((props) => (
          <Grid item sm={4}>
            <Card className={classes.box} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.category}{" "}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Body;
