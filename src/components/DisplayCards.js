import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';

const DisplayCards = ({ cards }) => {
    return (
        <ImageList cols={8}>
            {cards.data.cardViews.map((card) => (
                <ImageListItem key={card.multiverseId}>
                    <img
                        src={card.imageUrl}
                        alt={card.name}
                        loading="lazy"
                    ></img>
                </ImageListItem>
            ))}
        </ImageList>
    );
};

DisplayCards.propTypes = {
    cards: PropTypes.object.isRequired,
};

export { DisplayCards };
