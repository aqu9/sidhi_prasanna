import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MenuProps } from "./utils";
const SidebarDetails = ({data, sidebarFunction,imageFilterList,filtered_element_data,set_filtered_element_data}) => {
  const [selected, setSelected] = useState([]);
  const handleChange = (event,val) => {
    const value = event.target.value;
    const i = imageFilterList.findIndex(eachItem => eachItem.name === event.target.name);
    
    if (i > -1) {
      if (event.target.value.length > 0) {
        imageFilterList[i] = {
          name: event.target.name,
          value: event.target.value,
        };
      } else {
        imageFilterList = imageFilterList.filter(
          (eachItem) => eachItem.name != event.target.name
        );
      }
    } else
      imageFilterList.push({
        name: event.target.name,
        value: event.target.value,
      });
    sidebarFunction(imageFilterList)
    setSelected(value);
  };
  return (
    <>
      <FormControl>
      <InputLabel id="mutiple-select-label">{data.label}</InputLabel>
        <Select
        sx={{mt:2}}
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={(event)=>handleChange(event,selected)}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          name={data.label}
        >
          {data?.value?.map((option, index) => (
            <MenuItem key={index} value={option}>
              <ListItemIcon key={index}>
                <Checkbox checked={selected.indexOf(option) > -1 }  />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SidebarDetails;
