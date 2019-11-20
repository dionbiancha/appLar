import React, { Component } from 'react';
import { 
    View, 
    StyleSheet,
    TouchableOpacity,
    Text 
} from 'react-native';

export default class LoginButton extends Component {

  render () {
    return (
      <View style={styles.loginArea}>
        <Text style={styles.textLogin}>Para acessar é necessario estar logado</Text>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#355495'}]}>
            <Text style={styles.textButton}>Entrar com o Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#D84736'}]}>
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
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 5,
      margin: 5
    },
    textButton: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center'
    }
});