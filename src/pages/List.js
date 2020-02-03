import React, {Component} from 'react';
import {
	View,
	Modal,
	Text,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
    StyleSheet
} from 'react-native';

import TopMain from '../components/header/topMain';
import CustomList from '../components/field/CustomList';
import SimpleButton from '../components/buttons/simpleButton';

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	};

    static navigationOptions = {
		tabBarIcon: ({ focused, tintColor }) => {
		    if (focused) {
		        return (
		            <Image source={require('../icons/listIconRed.png')} style={styles.IconImage} />
		        );
		    } else {
		        return (
		            <Image source={require('../icons/listIcon.png')} style={styles.IconImage} />
		        );
		    }
		}
	}

	openModal() {
		let s = this.state;
		s.modalVisible = true;
		this.setState(s);
	}

	closeModal() {
		let s = this.state;
		s.modalVisible = false;
		this.setState(s);
	}

    render(){
        return(
            <View style={styles.container}>
				<View style={styles.topMain}>
					<TopMain name=""/>
					<TouchableOpacity onPress={this.openModal}>
						<Image style={styles.iconMore} source={require('../icons/moreGray.png')}/>
					</TouchableOpacity>
				</View>  
				<CustomList />
				<Modal animationType="fade" visible={this.state.modalVisible}>
					<View style={styles.modal} > 
						<Text style={styles.textTop}>Criar nova lista</Text>
						<View>
							<Text style={styles.textInput}>Nome</Text>
							<TextInput style={styles.inputArea}/>
							<Text style={styles.textInput}>Descrição</Text>
							<TextInput style={styles.inputArea}/>
						</View>
						<View style={styles.buttonArea}>
							<View style={{margin:10}}>
								<SimpleButton bg="#3F51B5" text="Criar" />
							</View>
							<View style={{margin:10}}>
								<SimpleButton bg="#EC6D79" text="Cancelar" onPress={this.closeModal} />
							</View>
						</View>	
					</View>
				</Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	IconImage: {
		width: 26,
		height: 26
	},
	container: {
		height: 780,
		flexDirection: 'column'
	},
	topMain: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10
	},
	iconMore: {
		width: 35,
		height: 35,
		margin: 10
	},
	modal: {
		flex: 1,
		justifyContent: 'space-between'
	},
	textTop: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 10,
		color: '#757575'
	},
	textInput: {
		fontSize: 20,
		marginLeft: 10
	},
	inputArea: {
		height: 40,
		borderBottomWidth: 1,
		margin: 10,
		borderColor: '#757575'
	},
	buttonArea: {
		justifyContent: 'center',
		flexDirection: 'row'
	}
});