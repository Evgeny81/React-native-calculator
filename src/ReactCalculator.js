import React, {Component} from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
]
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
        }
    }

    render() {
        return (
        <View style={Style.rootContainer}>
            <View style={Style.displayContainer}>
                <Text style={Style.displayText}>{this.state.inputValue}</Text>
            </View>
            <View style={Style.inputContainer}>
                {this._renderInputButtons()}
            </View>
        </View>
        )
    }

    _renderInputButtons() {
        let views = [];
        let self = this;
        inputButtons.forEach(function(itemOne, countOne) {
            let inputRow = [];
            itemOne.forEach(function(itemSecond, countTwo) {
                inputRow.push(
                    <InputButton value={itemSecond}
                                 onPress={self._onInputButtonPressed.bind(self, itemSecond)}
                                 key = {countOne + "-" + countTwo} />
                );
            })
            views.push(<View style={Style.inputRow} key={"row-" + countOne}>{inputRow}</View>);
        });
        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;
        this.setState({
                    inputValue: inputValue
        });
    }
}

AppRegistry.registerComponent('Calculator', () => Calculator);