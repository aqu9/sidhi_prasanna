import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "next/link";

import Styles from "../styles/testing.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Custom_Grid = ({ route, data }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      style={{ backgroundColor: "wheat", padding: "15px" }}
    >
      {data.map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Link href={`/${route}?title=${_.item}`} key={index}>
            <Item
              key={index}
              className={Styles.productContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={_.imageUrl}
                // width={50}
                // height={50}
                style={{ marginLeft: 25 }}
              />
              {_.item ? (
                <Typography variant="h6">{_.item}</Typography>
              ) : (
                <Typography>{_}</Typography>
              )}
            </Item>
          </Link>
        </Grid>
      ))}
      {data.length === 0 && (
        <Typography variant="h6" style={{ width: "100%", textAlign: "center" }}>
          Oops! Nothing Found 😶
        </Typography>
      )}
    </Grid>
  );
};

export default Custom_Grid;
