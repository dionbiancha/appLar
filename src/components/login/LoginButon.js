import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text ,
    Image
} from 'react-native';


export default class LoginButton extends Component {
  render () {
    return (
      <View style={styles.loginArea}>
        <Text style={styles.textLogin}>Para acessar é necessario estar logado</Text>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#355495'}]}>
            <Image source={require('./icons/iconFacebook.png')} style={styles.image}/>
            <Text style={styles.textButton}>Entrar com o Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#D74635'}]}>
            <Image source={require('./icons/iconGoogle.png')} style={styles.image} />
            <Text style={styles.textButton}>Entrar com o Google</Text>
          </TouchableOpacity>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    image: {
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
    }
});