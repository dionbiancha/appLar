import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';


class SimpleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bg }]}
                onPress={this.props.onPress}
            >
                <Text style={styles.textButton}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export default SimpleButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 10
    },
    textButton: {
        color: '#FFFFFF'
    }
});