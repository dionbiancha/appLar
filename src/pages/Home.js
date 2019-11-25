import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
		    if (focused) {
		        return (
		            <Image source={require('../icons/homeIconRed.png')} style={styles.IconImage} />
		        );
		    } else {
		        return (
		            <Image source={require('../icons/homeIcon.png')} style={styles.IconImage} />
		        );
		    }
		}
	}
    render(){
        return(
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	IconImage: {
		width: 26,
		height: 26
	}
});