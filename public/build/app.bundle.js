webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _bingoCard = __webpack_require__(172);

	var _bingoCard2 = _interopRequireDefault(_bingoCard);

	var _sampleValues = __webpack_require__(173);

	var _sampleValues2 = _interopRequireDefault(_sampleValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MainContainer = _react2.default.createClass({
	    displayName: 'MainContainer',

	    getInitialState: function getInitialState() {
	        var initialValues = this.generateCards(4);

	        return { cardValues: initialValues };
	    },
	    generateCardValues: function generateCardValues() {
	        var emptySpot = Math.floor(Math.random() * 16);

	        var values = [];
	        var usedIndexes = [];

	        for (var i = 0; i < 16; i++) {
	            if (i === emptySpot) {
	                values[i] = 'X';
	                continue;
	            }

	            var newValueIndex = Math.floor(Math.random() * 16);
	            while (usedIndexes.indexOf(newValueIndex) > -1) {
	                newValueIndex = Math.floor(Math.random() * 16);
	            }

	            var newValue = _sampleValues2.default[newValueIndex];

	            values[i] = newValue;
	            usedIndexes.push(newValueIndex);
	        }

	        return values;
	    },
	    generateCards: function generateCards(cardCount) {
	        var newCards = [];

	        for (var i = 0; i < cardCount; i++) {
	            var newValues = this.generateCardValues();
	            newCards.push(newValues);
	        }

	        return newCards;
	    },
	    updateCard: function updateCard() {
	        var newCards = this.generateCards(4);

	        this.setState({ cardValues: newCards });
	    },
	    render: function render() {
	        var cards = this.state.cardValues;

	        var cardsHtml = cards.map(function (card, index) {
	            return _react2.default.createElement(_bingoCard2.default, { values: card, key: index });
	        });

	        return _react2.default.createElement(
	            'div',
	            { className: 'main-container' },
	            _react2.default.createElement(
	                'div',
	                { className: 'bingo-cards__container' },
	                cardsHtml
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'btn__container no-print' },
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn btn-primary', onClick: this.updateCard },
	                    'Generate new cards'
	                )
	            )
	        );
	    }
	});

	_reactDom2.default.render(_react2.default.createElement(MainContainer, null), document.getElementById('bingo-cards-container'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardCell = _react2.default.createClass({
	    displayName: "CardCell",

	    render: function render() {
	        var value = this.props.value;

	        return _react2.default.createElement(
	            "div",
	            { className: "bingo-card__cell" },
	            _react2.default.createElement(
	                "span",
	                null,
	                value
	            )
	        );
	    }
	});

	var BingoCard = _react2.default.createClass({
	    displayName: "BingoCard",

	    render: function render() {
	        var values = this.props.values;

	        var cellsHtml = values.map(function (value) {
	            return _react2.default.createElement(CardCell, { value: value, key: value });
	        });

	        return _react2.default.createElement(
	            "div",
	            { className: "bingo-card" },
	            cellsHtml
	        );
	    }
	});

	exports.default = BingoCard;

/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var sampleValues = ['Toca e me voy', 'Rrrrrronaldo', 'Pode isso, Arnaldo?', 'Olha o que ele fez', 'Esse menino Neymar', 'Ergue o braço', 'Não tem mais bobo', 'Vai embora do América', 'A regra é clara', 'Perigo de gol', 'Haja coração', 'Teste para cardíaco!', 'Não pode brincar aí', 'Era um lance difícil', 'Falta bem marcada', 'Foi ele!'];

	exports.default = sampleValues;

/***/ }

});