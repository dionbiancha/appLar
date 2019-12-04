import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text
} from 'react-native';


export class Product extends Component {
    static navigationOptions = { 
		title: 'Churrascomêtro',
		//headerBackImage:()=>(), Recebe um componente substituto da seta de voltar
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
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150,
        margin: 10
    },
    text: {
        fontSize: 20
    },
    iconMore: {
        width: 26,
        height: 26,
        margin: 10
    }
});