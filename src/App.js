import {Component} from 'react'

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                return {monsters: users}
            },
                () => {
                console.log(this.state)
            }
            ))
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value })
    }
   

  render() {
      return (
          <div className="App">
              <input className='search-box' type='search' placeholder='search monsters' onChange={this.handleChange}/>
              {this.state.monsters.map((monster) => {
                  return (
                      <h1 key={monster.id}>{monster.name}</h1>
                  )
              })}
          </div>
      );
  }
  
}

export default App;
