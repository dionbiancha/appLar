import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CustomListItem extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});