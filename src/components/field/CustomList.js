import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { customList } from '../../actions/AuthActions';
import CustomListItem from './CustomListItem';

export class CustomListArea extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.customListBuy}
                    renderItem={({item}) => <CustomListItem data={item}/>}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customListBuy: state.auth.customListBuy
    };
};

const CustomList = connect(mapStateToProps, {customList})(CustomListArea);

export default CustomList;

const styles = StyleSheet.create({
    container: {
        
    }
});