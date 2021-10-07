import * as React from 'react';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';

const DisplayDecks = ({ decks }) => {
    return (
        <List>
            {decks.data.deckname.map((deckname) => (
                <ListItem key={deckname}>{deckname}</ListItem>
            ))}
        </List>
    );
};

DisplayDecks.propTypes = {
    decks: PropTypes.object.isRequired,
};

export { DisplayDecks };
