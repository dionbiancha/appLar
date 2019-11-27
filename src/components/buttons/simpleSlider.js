import React,{Component} from 'react';
import {
    StyleSheet,
    Slider,
    View,
    Text  
} from 'react-native';


export default class SimpleSlider extends Component {
    constructor(props) {
		super(props);
		this.state = {
			valueSlider: 10
		};
	}
	render() {
		return (
			<View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.textSlider}>{this.props.name}</Text>
                    <Text style={styles.textSlider}>{parseInt(this.state.valueSlider)}</Text>
                </View>
                <Slider style={styles.sliderCustom} 
                minimumTrackTintColor="#FA2525" 
                maximumTrackTintColor="#CECECE"
                thumbTintColor="#FA2525"
                value={this.state.valueSlider} 
                minimumValue={1} maximumValue={20} 
                onValueChange={(v)=>this.setState({valueSlider:v})}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    textArea: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
	sliderCustom: {
        width: 300,
        marginTop: 10
	},
	textSlider: {
		textAlign: 'center',
        fontSize: 20,
        color: '#CECECE'
	}
});