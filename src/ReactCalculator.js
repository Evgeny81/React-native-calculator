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
    render() {
        return (
        <View style={Style.rootContainer}>
            <View style={Style.displayContainer}></View>
            <View style={Style.inputContainer}>
                {this._renderInputButtons()}
            </View>
        </View>
        )
    }

    _renderInputButtons() {
        let views = [];
        inputButtons.forEach(function(itemOne, countOne) {
            let row = itemOne;
            console.log(countOne + " One");
            let inputRow = [];
            itemOne.forEach(function(itemSecond, countTwo) {
                let input = itemSecond;
                console.log(countTwo + " Two");
                inputRow.push(
                    <InputButton value={input} key = {countOne + "-" + countTwo} />
                );

            })
            views.push(<View style={Style.inputRow} key={"row-" + countOne}>{inputRow}</View>);
            console.log(views[countOne])
        });
        return views;
    }
}

AppRegistry.registerComponent('Calculator', () => Calculator);