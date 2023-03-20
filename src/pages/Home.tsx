import { Box } from "@mui/material";
import AppDrawer from '../container/AppDrawer'
import {Route, Routes} from "react-router-dom";
import React from "react";
import ArticlesPage from "./Articles";
import UsersPage from "./Users";

const Home = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AppDrawer/>
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
      >
          <Routes>
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/users" element={<UsersPage />} />
          </Routes>
      </Box>
    </Box>
    </>
  );
};

export default Home;