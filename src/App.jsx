import React from "react";

import { CssBaseline } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import useStyles from "./components/styles";

import "./App.css";

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />

        <NavBar />

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Routes>
            <Route path="/" element={<Movies />} />

            <Route path="/movies/:id" element={<MovieInformation />} />

            <Route path="/actors/:id" element={<Actors />} />

            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
