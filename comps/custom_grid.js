import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";

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
    >
      {data.map((_, index) => (
        <Link href={`/${route}?title=${_.item}`} key={index}>
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item key={index} >
              {_.item ? <a>{_.item}</a> : <a>{_}</a>}
              <img
                src={_.imageUrl}
                width={50}
                height={50}
                style={{ marginLeft: 25 }}
              />
            </Item>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Custom_Grid;
