import React from 'react';
import { useQuery } from 'react-query';
import { fetchDecksInOwnDB } from '../services/searchService';
import { DisplayDecks } from './DisplayDecks';

function DeckCollection() {
    const { data, isSuccess } = useQuery({
        queryKey: 'deckFetching',
        queryFn: () => fetchDecksInOwnDB(),
        refetchOnWindowFocus: false,
        retry: false,
    });

    return <>{isSuccess && <DisplayDecks decks={{ data }} />}</>;
}

export { DeckCollection };
