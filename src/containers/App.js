import React from "react";

import "./App.css";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
const state = { robots: robots, searchfield: "" };

class App extends React.Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: "" };
  }

  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((robot) => {
        console.log({ robot });
        this.setState({ robots: robot }); // Added a closing parenthesis here
      });
  }
  render() {
    const{robots,searchfield} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    
    
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.OnSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
  }
}

export default App;
