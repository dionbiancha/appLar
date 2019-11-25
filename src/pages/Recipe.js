import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Recipe extends Component {
    static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
		    if (focused) {
		        return (
		            <Image source={require('../icons/recipeIconRed.png')} style={styles.IconImage} />
		        );
		    } else {
		        return (
		            <Image source={require('../icons/recipeIcon.png')} style={styles.IconImage} />
		        );
		    }
		}
	}
    render(){
        return(
            <View>
                <Text>Recipe</Text>
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