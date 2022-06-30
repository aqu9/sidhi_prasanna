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

import { MenuProps, options } from "./utils";
import { TextField } from "@mui/material";
import { Label } from "@mui/icons-material";
const SidebarDetails = ({data}) => {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
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
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem value="all">
            <ListItemIcon>
              <Checkbox
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            </ListItemIcon>
            <ListItemText primary="Select All" />
          </MenuItem>
          {data?.value?.map((option, index) => (
            <MenuItem key={index} value={option}>
              <ListItemIcon key={index}>
                <Checkbox checked={selected.indexOf(option) > -1} />
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
