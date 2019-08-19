import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  // fetching data from jsonplaceholder 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    // added a monster filter when searching for certain monsters
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div>
        <input type='search' placeholder='search monsters' onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}/>  
      </div>
    );
  }
}


export default App;
