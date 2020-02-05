import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { setKey } from '../../actions/BuyListActions';

export class CustomListItem extends Component {

    openListItem = key => {
        this.props.sendKey(key)
        this.props.navigation.navigate('ListItem')
    }


    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.listArea} onPress={()=>{ this.openListItem(this.props.data.key) }}>
                    <View style={styles.textArea}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.description}>{this.props.data.description}</Text>
                    </View>
                    <View style={styles.iconsArea}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.icon} source={require('../../icons/totalItens.png')}/>
                            <Text style={styles.textIcon}>Itens: {this.props.data.totalItens}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={styles.icon} source={require('../../icons/scratched.png')}/>
                            <Text style={styles.textIcon}>Riscados: {this.props.data.scratched}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    listArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E5E5E5',
        paddingLeft: 10,
        paddingBottom: 20,
        paddingRight: 10,
        paddingTop: 20
        
    },
    textArea: {

    },
    iconsArea: {
        justifyContent: 'flex-end'
    },
    title: {
        color: '#757575',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        color: '#333333'
    },
    textIcon: {
        color: '#757575'
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 3
    }

});

const mapDispatchToProps = dispatch => ({
    sendKey: key => dispatch(setKey(key))
})

export default connect(
    null,
    mapDispatchToProps
)(CustomListItem)