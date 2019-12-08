import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class TopMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.top}>
					<View style={styles.areaLogo}>
						<Image style={styles.logo} source={require('../../img/logo.png')}/>
						<Text style={styles.title}>La Receita</Text>
					</View>
                    <Text style={styles.text}>
                       {this.props.name}
                    </Text>
				</View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginBottom: 10
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	areaLogo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	logo: {
		width: 50,
		height: 50
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#FA2525'
	},
	text: {
		color: '#757575',
		fontWeight: 'bold'
	}
});