import { Component } from 'react'
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

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

    onSearchChange = (e) => {
        const searchString = e.target.value.toLocaleLowerCase();
        this.setState({ searchValue: searchString })
    }


    render() {

        const { monsters, searchValue } = this.state;
        const { onSearchChange } = this;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchValue)
        });

        return (
            <div className="App">
                <SearchBox
                    onChangeHandler={onSearchChange} 
                    placeholder="Search Monsters"
                    className='search-box'
                    />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }

}

export default App;
