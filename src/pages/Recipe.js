import React, {Component} from 'react';
import {
    View,
    Image,
	StyleSheet,
	ScrollView
} from 'react-native';

import TopMain from '../components/header/topMain';
import HeaderCategory from '../components/header/headerCategory';
import Icons from '../components/header/headerCategoryIcon';

import InputImage from '../components/field/Image/inputImage';
import {InputImg, Imagens} from '../components/field/Image/inputImg';

import Category from '../components/field/category/category';
import IconsCategory from '../components/field/category/categoryIcon';

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
			<ScrollView>
				<View style={styles.container}>
					<TopMain name=""/>
					<View style={styles.products}>
						<HeaderCategory id="2" image={Icons[2]}/>
						<InputImage inputImg={Imagens.chef.url}/>
					</View>
					<View style={styles.areaRecipe}>
						<HeaderCategory id="3" image={Icons[3]}/>
						<InputImage inputImg={Imagens.custom.url}/>
					</View>
					<View style={styles.areaRecipe}>
						<HeaderCategory id="4" image={Icons[4]}/>
						<View style={styles.category}>
							<Category id="0" img={IconsCategory[4]}/>
							<Category id="1" img={IconsCategory[5]}/>
						</View>
						<View style={styles.category}>
							<Category id="2" img={IconsCategory[6]}/>
							<Category id="3" img={IconsCategory[7]}/>
						</View>
					</View>
				</View>
			</ScrollView>
			
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
		flexDirection: 'column',
		margin: 10
	},
	products: {
		flex: 1
	},
	areaRecipe: {
		flex: 1
	},
	category: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});