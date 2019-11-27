import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text
} from 'react-native';

import SimpleSlider from '../components/buttons/simpleSlider';
import SimpleButton from '../components/buttons/simpleButton';

export class Churrascometro extends Component {
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
                <Image style={styles.image} source={require('../img/enchidos.png')}/>
                <Text style={styles.text}>Quantos convidados você vai ter?</Text>
                <SimpleSlider name="HOMENS"/>
                <SimpleSlider name="MULHERES"/>
                <SimpleSlider name="CRIANÇAS"/>
                <View style={{margin: 30}}>
                    <SimpleButton text="Continuar" bg="#3F51B5" onPress={()=>{this.props.navigation.navigate('ChurrascometroProdutos')}}/>
                </View>
            </View>
        );
    }
}

export class ChurrascometroProdutos extends Component {
    static navigationOptions = { 
		title: 'Churrascomêtro',
		headerRight:()=><Image style={styles.iconMore} source={require('../icons/more.png')}/>,
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
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image style={styles.image} source={require('../img/comida.png')}/>
                    <Text style={styles.text}>O que vai servir aos convidados?</Text>
                </View>
                <View style={{margin: 30}}>
                    <SimpleButton text="Continuar" bg="#3F51B5" />
                </View>
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