import React from 'react';
import { 
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  Button 
} from 'react-native';

import * as infoData from './json/tutorial';
import * as infoColor from './json/circleColor';
import Images from '../img/ImageCollection';
import SimpleButton from '../components/buttons/simpleButton';

const json = 'infoData.features[this.state.key].properties';
const jsonColor = 'infoColor.features[this.state.key].colors';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    }
    this.nextTutorial = this.nextTutorial.bind(this);
  } 
  nextTutorial() {
    let s = this.state;
    s.key = s.key + 1;
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={require('../img/back.jpg')} 
          style={styles.background}>
        </ImageBackground> 
          <View style={styles.areaImage}>
            <Image source={Images[this.state.key]} style={styles.image}/>
          </View>
          <View style={styles.areaText}>
            <Text style={styles.title}>{eval(json).NAME}</Text>
            <Text style={styles.description}>{eval(json).INFO}</Text>
          </View>
          <View style={styles.areaButton}>
            <SimpleButton text="Próximo" bg="#007AFF" onPress={this.nextTutorial}/>
            <View style={styles.areaCircle}>
              <View style={[styles.circle, {backgroundColor: eval(jsonColor)[0].COLOR}]}></View>
              <View style={[styles.circle, {backgroundColor: eval(jsonColor)[1].COLOR}]}></View>
              <View style={[styles.circle, {backgroundColor: eval(jsonColor)[2].COLOR}]}></View>
              <View style={[styles.circle, {backgroundColor: eval(jsonColor)[3].COLOR}]}></View>
            </View>
          </View>
      </View>          
    );
  }
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.1
  },
  areaImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 180,
    height: 180
  },
  areaText: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  areaButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  areaCircle: {
    flex: 1,
    flexDirection: 'row'
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    margin: 10,
    marginTop: 30
  }
});