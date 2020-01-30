import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import TopMain from '../components/header/topMain';
import CustomList from '../components/field/CustomList';

export default class List extends Component {
    static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
		    if (focused) {
		        return (
		            <Image source={require('../icons/listIconRed.png')} style={styles.IconImage} />
		        );
		    } else {
		        return (
		            <Image source={require('../icons/listIcon.png')} style={styles.IconImage} />
		        );
		    }
		}
	}
    render(){
        return(
            <View style={styles.container}>
				<View style={styles.topMain}>
					<TopMain name=""/>
				</View>  
				<CustomList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
	IconImage: {
		width: 26,
		height: 26
	},
	container: {
		height: 780,
		flexDirection: 'column'
	},
	topMain: {
		margin: 10
	}
});