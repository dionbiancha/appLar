import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
export default class ListItem extends Component {
    render() {
        return(
        <View>
            <Text>{this.props.navigation.state.params.key}</Text>
        </View>
        );
    }
}