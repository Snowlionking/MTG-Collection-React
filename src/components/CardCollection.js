import React from 'react';
import { useQuery } from 'react-query';
import { searchCardInOwnDB } from '../services/searchService';
import { DisplayCards } from './DisplayCards';

function CardCollection() {
    const { data, isSuccess } = useQuery({
        queryKey: 'cardFetching',
        queryFn: () => searchCardInOwnDB(),
        refetchOnWindowFocus: false,
        retry: false,
    });

    return <>{isSuccess && <DisplayCards cards={{ data }} />}</>;
}

export { CardCollection };
