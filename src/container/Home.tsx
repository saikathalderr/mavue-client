import { Box, Drawer } from "@mui/material";

const drawerWidth = 340;

const Home = () => {
  return (
    <>
    <Box>
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        Yoo
      </Drawer>
    </Box>
    </>
  );
};

export default Home;
