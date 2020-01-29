import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { customList } from '../../actions/AuthActions';
import CustomListItem from './CustomListItem';

export class CustomListArea extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <Text>Teste</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.auth.name
    };
};

const CustomList = connect(mapStateToProps, {customList})(CustomListArea);

export default CustomList;

const styles = StyleSheet.create({
    container: {

    }
});