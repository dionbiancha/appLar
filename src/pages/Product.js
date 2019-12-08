import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text
} from 'react-native';

import * as infoProduct from './json/products';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            barcode: '',
            peso: '',
            img: '',
            valor_energetico: '',
            proteinas: '',
            carboidratos: '',
            gorduras_totais: '',
            açucar: ''
        }
        const { navigation } = this.props;
        const code = (JSON.stringify(navigation.getParam('barcode'))).replace(/[\\"]/g, '');
        
        for(let i=-1; i++; i >=1 ){
           let p = infoProduct.produtos[i];
            if(p.barcode === code )
                {
                    let s = this.state;
                    s.titulo = p.titulo;
                    s.peso = p.peso;
                    s.img = p.img;
                    s.barcode = p.barcode;

                    let  n = p.nutricional;
                    s.valor_energetico = n.valor_energetico;
                    s.proteinas = n.proteinas;
                    s.carboidratos = n.carboidratos;
                    s.gorduras_totais = n.gorduras_totais;
                    s.açucar = n.açucar;

                    this.setState(s);
                }
        }
    }
    static navigationOptions = { 
        title: 'Produtos',
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
                <View style={styles.topProduct}>
                    <View style={styles.imageArea}>
                        <Image source={require('../img/milho.jpg')} style={styles.imageProduct}/>
                    </View>
                    <View style={styles.infoTop}> 
                        <Text style={styles.sub}>Peso</Text>
                        <Text>{this.state.peso}</Text>
                        <Text style={styles.sub}>Código de barras</Text>
                        <Text>{this.state.barcode}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    },
    text: {
        fontSize: 20
    },
    iconMore: {
        width: 26,
        height: 26,
        margin: 10
    },
    topProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageArea: {
        flex: 1
    },
    imageProduct: {
        height: 150,
        width: 150,
        margin: 10
    },
    infoTop: {
        flex: 1,
        flexDirection: 'column'
    },
    sub: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 5,
        color: '#757575'
    }
});