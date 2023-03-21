import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import {IMenu, IChildMenu} from "./interface";

const MenuItem = ({ menu }: { menu: IMenu }) => {
    const navigate = useNavigate();

    return (
       <>
           <ListItem disablePadding sx={{
               marginBottom: 1
           }}>
               <ListItemIcon>
                   <menu.icon color={menu.iconColor}/>
               </ListItemIcon>
               <ListItemText primary={<b>{menu.title}</b>} />
           </ListItem>

           {
               menu.items.map((item: IChildMenu, idx: number) => {
                   return (
                       <ListItem disablePadding dense key={'menu-child-item-'+idx+1}>
                           <ListItemButton onClick={() => navigate(item.path)}>
                               <ListItemText inset primary={
                                  <>
                                      <item.icon color={item.iconColor} fontSize="inherit" sx={{ mr: 1 }} />
                                      <b>{item.title}</b>
                                  </>
                               } />
                           </ListItemButton>
                       </ListItem>
                   )
               })
           }
       </>
    )
}
export default MenuItem