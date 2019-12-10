import React, {Component} from 'react';
import {View, 
    StyleSheet,
    Image, 
    Text,
    ScrollView,
    Dimensions
} from 'react-native';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


const { width: screenWidth } = Dimensions.get('window')

export default class MyCarousel extends Component {
    constructor() {
        super()
        this.state = {
          entries: [
              { title: 'hello' },
              { title: 'world' },
              { title: 'teste' },
            ]
        }
      }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
                sliderWidth={350}
                sliderHeight={150}
                itemWidth={250}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: 250,
    height: 200,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})