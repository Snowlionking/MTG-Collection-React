import React, { useEffect, useRef, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';
import { addCardToOwnDB } from '../services/searchService';
import { useQuery } from 'react-query';

const CardAdding = ({ cards }) => {
    const [multiverseId, setMultiverseId] = useState(0);
    const firstRender = useRef(true);
    const { refetch } = useQuery({
        queryKey: 'cardAdding',
        queryFn: () => addCardToOwnDB(multiverseId),
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
    });
    useEffect(() => {
        console.log('useEffect was called! ' + multiverseId);
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        console.log('useEffect was called a second time! ' + multiverseId);
        refetch();
    }, [multiverseId]);

    return (
        <>
            <ImageList cols={8}>
                {cards.data.cardViews.map((card) => (
                    <ImageListItem key={card.multiverseId}>
                        <img
                            src={card.imageUrl}
                            alt={card.name}
                            loading="lazy"
                            onClick={() => setMultiverseId(card.multiverseId)}
                        ></img>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
};

CardAdding.propTypes = {
    cards: PropTypes.object.isRequired,
};

export { CardAdding };
