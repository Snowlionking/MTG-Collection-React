import React, { Component } from 'react';
import Cards from './components/cards'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            multiverseId: -1,
            cards: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFetchSubmit = this.handleFetchSubmit.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
        this.setState({ multiverseId: event.target.value });
    }

    handleFetchSubmit(event) {
        alert('A name was submitted: ' + this.state.searchTerm);
        event.preventDefault();

        fetch('http://localhost:8080/api/card/' + this.state.searchTerm)
            .then(res => res.json())
            .then((data) => {
                this.setState({ cards: data })
            })
            .catch(console.log)
    }

    handleAddSubmit(event) {
        alert('A card was added to the database: ' + this.state.multiverseId);
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch('http://localhost:8080/api/card/' + this.state.multiverseId, requestOptions)
            .catch(console.log)
    }

    render() {
        return (
            <><form onSubmit={this.handleFetchSubmit}>
                <label>
                    SearchTerm:
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
                <Cards cards={this.state.cards} />
                <form onSubmit={this.handleAddSubmit}>
                    <label>
                        MultiverseId:
                        <input type="text" value={this.state.multiverseId} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </>
        );
    }
}

export default App;
