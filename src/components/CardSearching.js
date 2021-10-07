import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useQuery } from 'react-query';
import { searchCardInOfficialDB } from '../services/searchService';
import { CardAdding } from './CardAdding';

const useStyles = makeStyles({
    textField: {},
});

function CardSearching() {
    const classes = useStyles();

    const [cardName, setCardName] = useState('');

    const { data, refetch } = useQuery({
        queryKey: 'cardSearching',
        queryFn: () => searchCardInOfficialDB(cardName),
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.info('Handling: ' + cardName);
        refetch();
    };

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="searchField"
                    className={classes.textField}
                    label="Cardname"
                    variant="filled"
                    color="primary"
                    required
                    onChange={(e) => setCardName(e.target.value)}
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {data && <CardAdding cards={{ data }} />}
        </>
    );
}

export { CardSearching };
