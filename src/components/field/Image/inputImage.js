import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class InputImage extends Component {
    render(){
        return(
            <View style={styles.areaItem}>
                <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7}>
                    <Image style={styles.imageItem} source={this.props.inputImg}/>
                </TouchableOpacity>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    areaItem: {
        flex: 3,
        marginBottom: 10
        
    },
    imageItem: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    }
});