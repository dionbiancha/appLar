import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import TopMain from '../components/header/topMain';
import HeaderCategory from '../components/header/headerCategory';
import Icons from '../components/header/headerCategoryIcon';

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
            <View style={styles.container}>
                <TopMain name=""/>
				<View style={styles.products}>
					<HeaderCategory id="2" image={Icons[2]}/>
				</View>
				<View style={styles.churascometro}>
					<HeaderCategory id="3" image={Icons[3]}/>
				</View>
				<View style={styles.churascometro}>
					<HeaderCategory id="4" image={Icons[4]}/>
				</View>
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
		flex: 1,
		flexDirection: 'column',
		margin: 10
	},
	products: {
		flex: 1
	},
	churascometro: {
		flex: 1
	}
});