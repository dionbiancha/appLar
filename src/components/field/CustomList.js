import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { customList } from '../../actions/BuyListActions';
import CustomListItem from './CustomListItem';

export class CustomListArea extends Component {
    
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={this.props.customListBuy}
                        renderItem={({item}) => <CustomListItem data={item}/>}
                        extraData={this.props.change}
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customListBuy: state.customList.customListBuy
    };
};

const CustomList = connect(mapStateToProps, {customList})(CustomListArea);

export default CustomList;

const styles = StyleSheet.create({
    container: {
        
    }
});