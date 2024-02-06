import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
const state = {robots: robots, searchfield: "" };

class App extends React.Component{

  constructor(){
    super();
    this.state = { robots: robots, searchfield: ""};
  }

OnSearchChange = (event) => { 
 this.setState({searchfield: event.target.value});
}

  render() {

    const filteredRobots = this.state.robots.filter((robot) =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    console.log(filteredRobots);
  return(
<div className="tc">
<h1>RoboFriends</h1>
<SearchBox searchChange={this.OnSearchChange}/>
<CardList robots={this.state.robots} />;
    </div>
    
  );
}
}

export default App;
