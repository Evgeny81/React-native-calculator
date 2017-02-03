import React, {Component} from 'react';
import {
    Text,
    AppRegistry
} from 'react-native';

class Calculator extends Component {
    render() {
        return (
            <Text> Project start! </Text>
        )
    }
}

AppRegistry.registerComponent('Calculator', () => Calculator);