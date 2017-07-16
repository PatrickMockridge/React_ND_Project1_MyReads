import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BookList from "./BookList";
import BookSearch from "./BookSearch";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookList} />
        <Route path="/search" component={BookSearch} />
      </div>
    );
  }
}

export default App;
