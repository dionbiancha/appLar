import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import TopMain from '../components/fields/topMain';
import HeaderCategory from '../components/fields/headerCategory';
import Icons from '../components/fields/headerCategoryIcon';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Dionei'
		};
	}
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
                <TopMain name={"Bem Vindo "+this.state.name}/>
				<View style={styles.products}>
					<HeaderCategory id="0" image={Icons[0]}/>
				</View>
				<View style={styles.churascometro}>
					<HeaderCategory id="1" image={Icons[1]}/>
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