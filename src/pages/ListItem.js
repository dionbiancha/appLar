import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
export class ListItem extends Component {
    render() {
        return(
        <View>
            <Text>{this.props.key}</Text>
        </View>
        );
    }
}

const mapStateToProps = state => ({
    key: state.CustomListReducer.key
})

export default connect(
    mapStateToProps,
    null
)(ListItem)