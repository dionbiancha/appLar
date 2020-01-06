import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

import TopMain from '../components/header/topMain';
import HeaderCategory from '../components/header/headerCategory';
import Icons from '../components/header/headerCategoryIcon';

import Category from '../components/field/category/category';
import IconsCategory from '../components/field/category/categoryIcon';

import InputImage from '../components/field/Image/inputImage';
import {InputImg, Imagens} from '../components/field/Image/inputImg';

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
                <TopMain name={"Bem Vindo "+ this.state.name }/>
				<View style={styles.products}>
					<HeaderCategory id="0" image={Icons[0]}/>
					<View style={styles.category}>
						<Category id="0" img={IconsCategory[0]}/>
						<Category id="1" img={IconsCategory[1]}/>
					</View>
					<View style={styles.category}>
						<Category id="2" img={IconsCategory[2]}/>
						<Category id="3" img={IconsCategory[3]}/>
					</View>
				</View>
				<View style={styles.churascometro}>
					<HeaderCategory id="1" image={Icons[1]}/>
					<InputImage 
						inputImg={ Imagens.churrasco.url } 
						onPress={ ()=>{ this.props.navigation.navigate('Churrascometro') } }/>
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
	},
	category: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});