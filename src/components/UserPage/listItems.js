import React from "react";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BarChartIcon from "@material-ui/icons/BarChart";

const MainListItems = ({ handleSection }) => {
  return (
    <div>
      <ListItem button onClick={() => handleSection("Info")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
      </ListItem>
      <ListItem button onClick={() => handleSection("Notes")}>
        <ListItemIcon>
          <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItem>
      <ListItem button onClick={() => handleSection("Deals")}>
        <ListItemIcon>
          <WorkOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Deals" />
      </ListItem>
      <ListItem button onClick={() => handleSection("Stats")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
