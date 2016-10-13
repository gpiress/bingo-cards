import React from 'react';
import ReactDOM from 'react-dom';

import BingoCard from './bingo-card';

import sampleValues from '../data/sample-values';

var MainContainer = React.createClass({
    getInitialState: function() {
        var initialValues = this.generateCards(4);

        return { cardValues: initialValues };
    },
    generateCardValues: function() {
        const emptySpot = Math.floor( Math.random() * 16 );

        var values = [];
        var usedIndexes = [];

        for (var i = 0; i < 16; i++) {
            if (i === emptySpot) {
                values[i] = 'X';
                continue;
            }

            var newValueIndex = Math.floor( Math.random() * 16 );
            while (usedIndexes.indexOf(newValueIndex) > -1) {
                newValueIndex = Math.floor( Math.random() * 16 );
            }

            const newValue = sampleValues[newValueIndex];

            values[i] = newValue;
            usedIndexes.push(newValueIndex);
        }

        return values;
    },
    generateCards: function(cardCount) {
        var newCards = [];

        for (var i = 0; i < cardCount; i++) {
            var newValues = this.generateCardValues();
            newCards.push(newValues);
        }

        return newCards;
    },
    updateCard: function() {
        var newCards = this.generateCards(4);

        this.setState({ cardValues: newCards });
    },
    render: function() {
        var cards = this.state.cardValues;

        var cardsHtml = cards.map(function(card, index) {
            return (
                <BingoCard values={card} key={index} />
            );
        });

        return (
            <div className="main-container">
                <div className="bingo-cards__container">
                    { cardsHtml }
                </div>

                <div className="btn__container no-print">
                    <button className="btn btn-primary" onClick={this.updateCard}>Generate new cards</button>
                </div>
            </div>

        );
    }
});

ReactDOM.render(<MainContainer />, document.getElementById('bingo-cards-container'));
