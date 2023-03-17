import { Component } from 'react'

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchValue: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState(() => {
                return { monsters: users }
            }))
    }

    handleChange = (e) => {
        const searchString = e.target.value.toLocaleLowerCase();
        this.setState({ searchValue: searchString })
    }


    render() {

        const { monsters, searchValue } = this.state;
        const { handleChange } = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchValue)
        });

        return (
            <div className="App">
                <input className='search-box' type='search' placeholder='search monsters' onChange={handleChange} />
                {filteredMonsters.map((monster) => {
                    return (
                        <h1 key={monster.id}>{monster.name}</h1>
                    )
                })}
            </div>
        );
    }

}

export default App;
