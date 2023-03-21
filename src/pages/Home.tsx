import {Box, Container} from "@mui/material";
import AppDrawer from '../container/AppDrawer'
import {Route, Routes} from "react-router-dom";
import React from "react";
import ArticlesPage from "./Chapters";
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
          <Container maxWidth="md" sx={{
              paddingY: 10
          }}>
              <Routes>
                  <Route path="/chapters" element={<ArticlesPage />} />
                  <Route path="/users" element={<UsersPage />} />
              </Routes>
          </Container>
      </Box>
    </Box>
    </>
  );
};

export default Home;
