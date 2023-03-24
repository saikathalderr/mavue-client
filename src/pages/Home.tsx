import AppDrawer from "../container/AppDrawer";
import ArticlesPage from "./Chapter";
import UsersPage from "./User";
import CreateUserPage from "./User/createUser.page";
import { Box, Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UpdateChapterPage from "./Chapter/updateChapter.page";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              paddingY: 10,
            }}
          >
            <Routes>
              <Route path="/" element={<ArticlesPage />} />
              <Route path="/chapters" element={<ArticlesPage />} />
                <Route path="/chapters/edit/:id" element={<UpdateChapterPage />} />
                <Route path="/users" element={<UsersPage />} />
              <Route path="/users/create" element={<CreateUserPage />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
