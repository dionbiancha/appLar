import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text,
    ScrollView
} from 'react-native';

import MyCarousel from '../components/field/carousel';

import * as infoProduct from './json/products';
import { white, black } from 'ansi-colors';

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

                    let  n = infoProduct.produtos[i].nutricional;
                    s.valor_energetico = n[i].valor_energetico;
                    s.proteinas = n[i].proteinas;
                    s.carboidratos = n[i].carboidratos;
                    s.gorduras_totais = n[i].gorduras_totais;
                    s.açucar = n[i].açucar;

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
            <ScrollView>
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
                    <View style={styles.labelArea}> 
                        <View style={styles.labelItem}> 
                            <View style={styles.alertText}>
                                <View style={styles.circle}></View>
                                <Text>Valor Energético</Text>
                            </View>
                            <Text style={styles.subTitle}>{this.state.valor_energetico}</Text>
                        </View>
                        <View style={styles.labelItem}> 
                            <View style={styles.alertText}>
                                <View style={styles.circle}></View>
                                <Text>Proteinas</Text>
                            </View>
                            <Text style={styles.subTitle}>{this.state.proteinas}</Text>
                        </View>
                        <View style={styles.labelItem}> 
                            <View style={styles.alertText}>
                                <View style={styles.circle}></View>
                                <Text>Carboidratos</Text>
                            </View>
                            <Text style={styles.subTitle}>{this.state.carboidratos}</Text>
                        </View>
                        <View style={styles.labelItem}> 
                            <View style={styles.alertText}>
                                <View style={styles.circle}></View>
                                <Text>Gorduras Totais</Text>
                            </View>
                            <Text style={styles.subTitle}>{this.state.gorduras_totais}</Text>
                        </View>
                        <View style={styles.labelItem}> 
                            <View style={styles.alertText}>
                                <View style={styles.circle}></View>
                                <Text>Açucar</Text>
                            </View>
                            <Text style={styles.subTitle}>{this.state.açucar}</Text>
                        </View>
                    </View>
                    <View style={styles.areaCarousel}>
                        <MyCarousel />
                    </View>
                </View>
            </ScrollView>
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
    },
    labelArea: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    labelItem: {
        width: '100%',
        marginTop: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circle: {
        width: 30,
        height: 30,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#82FC7C'
    },
    alertText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subTitle: {
        marginRight: 10,
        color: '#757575'
    },
    areaCarousel: {
        margin: 5
    }
});