import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class Barcode extends Component {
    static navigationOptions = {
		tabBarIcon: () => <Image source={require('../icons/barcodeIcon.png')} style={styles.IconImage} />
	}
    render(){
        return(
            <View>
                <Text>Barcode</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	IconImage: {
		width: 26,
		height: 26
	}
});