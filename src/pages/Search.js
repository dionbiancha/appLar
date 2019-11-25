import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Search extends Component {
    static navigationOptions = {
		tabBarIcon: () => <Image source={require('../icons/searchIcon.png')} style={styles.IconImage} />
	}
    render(){
        return(
            <View>
                <Text>Search</Text>
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