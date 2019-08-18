import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankentein',
          id: 'asc1'
        },
        {
          name: 'Zombie',
          id: 'asc3'
        },
        {
          name: 'Orcs',
          id: 'asc4'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id} > {monster.name} </h1>          
            ))
        }
      </div>
    );
  }
}


export default App;
