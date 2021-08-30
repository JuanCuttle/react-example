import "./App.css";
import AllMeetupsPage from "./pages/AllMeetups";
import { Route } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import React from "react";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favourites">
        <FavouritesPage />
      </Route>
    </div>
  );
}

export default App;
