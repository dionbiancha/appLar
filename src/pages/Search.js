import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';

export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Image source={require('../icons/searchIcon.png')} style={styles.IconImage} />,
        
	}
    render(){
        return(
            <View style={styles.container}>
                <TextInput  style={styles.inputArea} placeholder="Digite sua pesquisa..."/>
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
        margin: 10
    },
    inputArea: {
        
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#757575',

    }
});