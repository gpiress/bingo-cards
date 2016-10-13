import React from 'react';

var CardCell = React.createClass({
    render: function() {
        var value = this.props.value;

        return (
            <div className="bingo-card__cell">
                <span>{ value }</span>
            </div>
        );
    }
});

var BingoCard = React.createClass({
    render: function() {
        var values = this.props.values;

        var cellsHtml = values.map(function(value) {
            return (
                <CardCell value={value} key={value} />
            )
        });

        return (
            <div className="bingo-card">
                { cellsHtml }
            </div>
        );
    }
});

export default BingoCard;
