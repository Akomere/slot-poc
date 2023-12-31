import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./PageNotFound";
import BookingPage from "./pages/BookingPage";
import { Stack } from "@mui/material";
import ServicesPage from "./pages/ServicesPage";
import NavBar from "./common/NavBar";

function App() {
  return (
    <Stack direction="column" spacing={5}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/appointments" component={BookingPage} />
        <Route path="/services" component={ServicesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Stack>
  );
}

export default App;
