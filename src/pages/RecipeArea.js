import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text,
    ScrollView
} from 'react-native';

import * as infoRecipe from '../data/recipes';
import SimpleButton from '../components/buttons/simpleButton';

export default class RecipeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }      
    
    static navigationOptions = { 
        title: 'Receita',
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
        const itemId = JSON.stringify(navigation.getParam('itemId', 'NO-ID'));
        const json = infoRecipe.produtos[itemId];

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.infoArea}>
                        <View style={styles.intoArea}> 
                            <Image source={require('../icons/porcao.png')} style={styles.iconInfo}/>
                            <Text style={styles.textInfo}>{json.rendimento}</Text>
                        </View>
                        <View style={styles.intoArea}> 
                            <Image source={require('../icons/escala.png')} style={styles.iconInfo}/>
                            <Text style={styles.textInfo}>{json.peso}</Text>
                        </View>
                        <View style={styles.intoArea}> 
                            <Image source={require('../icons/calorias.png')} style={styles.iconInfo}/>
                            <Text style={styles.textInfo}>{json.valor_energetico}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.titleRecipe}>{json.igrediente[0].titulo}</Text>
                        {json.igrediente[0].descricao.map(park => (
                             <Text>- {park.item}</Text>
                        ))}
                        <Text style={styles.titleRecipe}>{json.igrediente[1].titulo}</Text>
                        {json.igrediente[1].descricao.map(park => (
                             <Text>- {park.item}</Text>
                        ))}
                        <Text style={styles.titleRecipe}>Preparo</Text>
                        <Text style={styles.text}>{json.preparo}</Text>
                    </View>
                    <View style={styles.areaButton}>
                        <SimpleButton text="Criar Lista" bg="#007AFF"/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    infoArea: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10
    },
    intoArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconInfo: {
        width: 25,
        height: 25,
    },
    textInfo: {
        marginLeft: 5
    },
    titleRecipe: {
        fontWeight: 'bold',
        color: '#757575',
        marginTop: 10,
        marginBottom: 5
    },
    text: {
        textAlign: 'justify'
    },
    areaButton: {
        marginTop: 30,
        alignItems: 'center'    
    }
});