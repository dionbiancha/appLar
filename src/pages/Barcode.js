import React, {Component} from 'react';
import { 
    AppRegistry, 
    StyleSheet, 
    Text, 
    View, 
    Alert, 
    Image 
} from 'react-native';
import { JsonValidacao } from '../data/receitas';

import BarcodeScanner, 
{ Exception, FocusMode, CameraFillMode, FlashMode, BarcodeType, pauseScanner, resumeScanner } 
from 'react-native-barcode-scanner-google';

export default class Barcode extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Image source={require('../icons/barcodeIcon.png')} style={styles.IconImage} />,
        tabBarVisible: false
	}
    render() {
      return (
        <View style={{flex: 1}}>
            <BarcodeScanner
                style={{flex: 1}}
                onBarcodeRead={({data, type}) => {
                    console.log("Teste");
                    const r = new JsonValidacao();
                    
                    r.fetchData(data, type)
                    .then(product => {
                        if(!product) {
                            Alert.alert("Produto não encontrado");
                            return;
                        }
                        Alert.alert("Produto", JSON.stringify(product));
                    })
                    .catch(error => {
                        Alert.alert("erro", "Não foi possível verificar o código.");
                    })
                }}

                onException={exceptionKey => {
                    switch (exceptionKey) {
                        case Exception.NO_PLAY_SERVICES:
                        case Exception.LOW_STORAGE:
                        case Exception.NOT_OPERATIONAL:
                        default: break;
                    }
                }}
                focusMode={FocusMode.AUTO /* could also be TAP or FIXED */}
                cameraFillMode={CameraFillMode.COVER /* could also be FIT */}
                barcodeType={BarcodeType.CODE_128 | BarcodeType.EAN_13 | BarcodeType.EAN_8 /* replace with ALL for all alternatives */}
                FlashMode={FlashMode.OFF /* 0 is OFF or 1 is TORCH  */}
            />
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