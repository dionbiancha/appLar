import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import * as infoData from './categoryInfo';
const json = 'infoData.features';

export default class Category extends Component {
    render(){
        return(
            <View style={[styles.areaItem, {backgroundColor: eval(json)[this.props.id].properties.COLOR}]}>
                <Image style={styles.iconItem} source={this.props.img}/>
            </View>           
        );
    }
}

const styles = StyleSheet.create({
    areaItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 5
    },
    iconItem: {
        width: 70,
        height: 70,
        margin: 8
    }
});