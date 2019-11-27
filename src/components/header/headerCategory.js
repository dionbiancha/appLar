import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import * as infoData from './headerCategoryInfo';
const json = 'infoData.features';

export default class HeaderCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topProduct}>
                    <View style={[styles.areaIconTop, {backgroundColor: eval(json)[this.props.id].properties.COLOR}]}>
                        <Image style={styles.IconTop} source={this.props.image}/>
                    </View> 
                    <View style={styles.areaText}>
                        <Text style={styles.title}>{eval(json)[this.props.id].properties.NAME}</Text>
                        <Text style={styles.description}>{eval(json)[this.props.id].properties.INFO}</Text>
                    </View> 
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
    },
    topProduct:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaIconTop: {
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    IconTop: {
        width: 25,
        height: 25,
    },
    areaText: {

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#757575'
    },
    description: {
        color:'#cecece'
    }
});