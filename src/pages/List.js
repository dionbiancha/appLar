import React, {Component} from 'react';
import {
	View,
	Modal,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { newCustomList, customList } from '../actions/BuyListActions';

import TopMain from '../components/header/topMain';
import CustomList from '../components/field/CustomList';
import SimpleButton from '../components/buttons/simpleButton';

export class ListArea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			title: '',
			description: '',
			customListBuy: []
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.newList = this.newList.bind(this);
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

	newList() {
		let s = this.state;
		let newItem = {
			key: s.customListBuy.length.toString(),
			title: s.title,
			description: s.description,
			totalItens: '0',
			scratched: '0'
		};
		let itens = s.customListBuy;
		itens.push(newItem)
		this.setState({itens})
		
		this.props.newCustomList(this.state.customListBuy);
		
		this.closeModal();
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
				<CustomList change={this.state} navigation= {this.props.navigation} />
				<Modal animationType="fade" visible={this.state.modalVisible}>
					<View style={styles.modal} > 
						<Text style={styles.textTop}>Criar nova lista</Text>
						<View>
							<Text style={styles.textInput}>Nome </Text>
							<TextInput style={styles.inputArea} onChangeText={(text) => this.setState({title: text})}/>
							<Text style={styles.textInput}>Descrição</Text>
							<TextInput style={styles.inputArea} onChangeText={(text) => this.setState({description: text})}/>
						</View>
						<View style={styles.buttonArea}>
							<View style={{margin:10}}>
								<SimpleButton bg="#3F51B5" text="Criar" onPress={this.newList}/>
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

const mapStateToProps = (state) => {
	return {
		customListBuy: state.customList.customListBuy
	};
};

const List = connect(mapStateToProps, { newCustomList, customList })(ListArea);

export default List;

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