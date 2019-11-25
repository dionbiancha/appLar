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
            <View style={styles.container}>
                <View style={styles.top}>
					<View style={styles.areaLogo}>
						<Image style={styles.logo} source={require('../img/logo.png')}/>
						<Text style={styles.title}>La Receita</Text>
					</View>
					<Text style={styles.text}>Bem vindo Irineu</Text>
				</View>
				<View style={styles.products}>

				</View>
				<View style={styles.churascometro}>

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
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	areaLogo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	logo: {
		width: 50,
		height: 50
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#FA2525'
	},
	text: {
	}
});