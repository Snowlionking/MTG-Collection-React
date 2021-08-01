import React from 'react'

const Cards = ({ cards }) => {
    return (
        <div>
            <center><h1>Card List</h1></center>
            {cards.map((card) => (
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{card.name}</h4>
                        <h5 >{card.multiverseId}</h5>
                        <img src={card.imageUrl} alt="Card" />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards