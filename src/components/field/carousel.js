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
              { title: 'Frango com molho',
              thumbnail: require('../../img/frango-molho.jpg')
            },
            { title: 'Lasanha Cremosa',
              thumbnail: require('../../img/lasanha.jpg')
            },
            { title: 'Risoto da vovó',
              thumbnail: require('../../img/risoto.jpg')
            }
            ]
        }
      }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.thumbnail}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    render () {
        return (
            <Carousel
                sliderWidth={360}
                sliderHeight={150}
                itemWidth={200}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 150,
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
  }
});

