import React, {Component} from 'react';
import { 
    AppRegistry, 
    StyleSheet, 
    Text, 
    View, 
    Alert, 
    Image 
} from 'react-native';

import * as infoProduct from './json/products';

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
                    for(let i=-1; i++; i >=1 ){
                        if(infoProduct.produtos[i].barcode === data )
                        {
                            this.props.navigation.navigate('Product',{barcode: data});
                        }
                        else {
                            Alert.alert(`Ops...'${data}' `);
                        }
                    }
                }}
                onException={exceptionKey => {
                    // check instructions on Github for a more detailed overview of these exceptions.
                    switch (exceptionKey) {
                        case Exception.NO_PLAY_SERVICES:
                            // tell the user they need to update Google Play Services
                        case Exception.LOW_STORAGE:
                            // tell the user their device doesn't have enough storage to fit the barcode scanning magic
                        case Exception.NOT_OPERATIONAL:
                            // Google's barcode magic is being downloaded, but is not yet operational.
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