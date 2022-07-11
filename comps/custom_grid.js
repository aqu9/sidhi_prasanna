import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Grid,Box} from "@mui/material/";
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Custom_Grid = ({ route, data }) => {
  const router=useRouter();


  const handleOnClick = (item)=>{
    router.push(`/${route}?title=${item.item}`);
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12,lg:16 }} sx={{px:2}}>
          {data.map((eachData, index) => (
              <Grid item xs={2} sm={4} md={4} key={index} onClick={() => handleOnClick(eachData)}>
                  <Item
                      key={index}
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'box-shadow .3s',
                          bordeRadius: '10px',
                          border: '1px solid #ccc',
                          background: '#fff',
                          '&:hover': { boxShadow: '0 0 11px rgba(33,33,33,.2)', cursor: 'pointer' },
                      }}
                  >
                      <Box>{eachData.item ? <a>{eachData.item}</a> : <a>{eachData}</a>}</Box>
                      <Box
                          component='img'
                          src={eachData.imageUrl}
                          width={50}
                          height={50}
                          style={{ marginLeft: 25 }}
                          sx={{ border: '1px solid black' }}
                      />
                  </Item>
              </Grid>
          ))}
      </Grid>
  );
};

export default Custom_Grid;
