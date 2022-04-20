import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Layout from "./Temple/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Layout Component={HomePage} />;
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <Layout Component={Login} />;
            }}
          />
          <Route
            path="/signup"
            render={() => {
              return <Layout Component={Signup} />;
            }}
          />
          <Route
            path="/detail/:id"
            render={() => {
              return <Layout Component={DetailMovie} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
