import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text
} from 'react-native';

import HeaderCategory from '../components/header/headerCategory';
import Icons from '../components/header/headerCategoryIcon';

export default class CategoryArea extends Component {
    static navigationOptions = { 
		title: 'Categoria Produtos',
		headerStyle: {
            backgroundColor: '#FC7C7C'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold'
        }
	};
    render() {
        const { navigation } = this.props;
        const idCat = JSON.stringify(navigation.getParam('idCat', 'NO-ID'));
        return(
            <View style={styles.container}>
               <HeaderCategory id={idCat} image={Icons[0]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});