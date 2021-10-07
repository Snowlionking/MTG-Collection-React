import React, { Component } from 'react';
import { CardSearching } from './components/CardSearching';
import { DeckCollection } from './components/DeckCollection';
import { CardCollection } from './components/CardCollection';

class App extends Component {
    render() {
        return (
            <>
                <CardCollection />
                <DeckCollection />
                <CardSearching />
            </>
        );
    }
}

export default App;
