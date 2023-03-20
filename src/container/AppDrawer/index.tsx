import React from "react";

import {Drawer} from "@mui/material";

import Menu from './Menu'
const AppDrawer = () => {

  const drawerWidth = 300;
  const drawerPadding = 6

  return (
      <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
                padding: drawerPadding,
                boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
      >
        <Menu/>
      </Drawer>
  )
}

export default AppDrawer