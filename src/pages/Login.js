import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text ,
    Image
} from 'react-native';
import { PermissionsAndroid } from 'react-native';

export default class Login extends Component {

  render () {
    requestCameraPermission();
    
    return (
      <View style={styles.container}>
        <View style={styles.textArea}>
          <Image source={require('../img/logo.png')} style={styles.logo} />
          <Text style={styles.textLogo}>A gente ama ver </Text>
          <Text style={styles.textLogo}>
            você 
            <Text style={styles.textBig}> Feliz</Text>
          </Text>
        </View>
        <View style={styles.loginArea}>
          <Text style={styles.textLogin}>Para acessar é necessario estar logado</Text>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#355495'}]}
            onPress={()=>{this.props.navigation.navigate('Tutorial')}}>
              <Image source={require('../icons/iconFacebook.png')} style={styles.icon}/>
              <Text style={styles.textButton}>Entrar com o Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#D74635'}]}
            onPress={()=>{this.props.navigation.navigate('Tutorial')}}>
              <Image source={require('../icons/iconGoogle.png')} style={styles.icon} />
              <Text style={styles.textButton}>Entrar com o Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

async function requestCameraPermission() {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'La Receita Permissão para utilizar câmera.',
        message: 'Precisamos do acesso a sua câmera para ler código de barras',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      marginBottom: 50
    },
    loginArea: {
      height: 130,
      margin: 10
    },
    textLogin: {
      color: '#000000',
      textAlign: 'center',
      marginBottom: 15
    },
    button: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      borderRadius: 5,
      margin: 5
    },
    icon: {
      position: 'absolute',
      width: 25,
      height: 25

    },
    textButton: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: 'bold'
    },
    textArea: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column'
    },
    logo: {
      width: 250,
      height: 200
    },
    textLogo: {
      fontSize: 25
    },
    textBig: {
      color: '#F7213D', 
      fontSize: 35,
      fontWeight: 'bold'
    }
});