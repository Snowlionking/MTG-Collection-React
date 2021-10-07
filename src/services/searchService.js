const searchCardInOfficialDB = async (cardname) => {
    const res = await fetch(`http://localhost:8080/api/card/${cardname}`);
    return res.json();
};

const searchCardInOwnDB = async () => {
    const res = await fetch('http://localhost:8080/api/cards/owned');
    return res.json();
};

const fetchDecksInOwnDB = async () => {
    const res = await fetch('http://localhost:8080/api/decks/owned');
    return res.json();
};

const addCardToOwnDB = async (multiverseId) => {
    console.log(multiverseId);
    const res = await fetch('http://localhost:8080/api/card', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(multiverseId),
    });
    return res.json();
};

export {
    searchCardInOfficialDB,
    searchCardInOwnDB,
    addCardToOwnDB,
    fetchDecksInOwnDB,
};
