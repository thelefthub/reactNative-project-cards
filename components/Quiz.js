import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { backGrey, orange, blue, white, green } from '../utils/colors'
import * as Storage from '../utils/storage';

function CheckBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.checkBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>Answer?</Text>
      </TouchableOpacity>
    )
}

export default class Quiz extends Component {
    state = {
        deck: "",
        count: 0,
        check: false

    }

    componentDidMount() {
        Storage.getDeck(this.props.navigation.state.params.title).then((response) => {
            this.setState({deck: response})
            console.log('deck: ', this.state.deck);
            
        })
    }

    onCheck = () => {
        this.setState({
            check: true
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Question {this.state.count++}</Text>
                <Text style={styles.cards}>{this.state.deck.questions == null ? 'No Question!' : this.state.deck.questions[this.state.count].question}?</Text>
                <CheckBtn onPress={this.onCheck} />
            </View>
        )

    }

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10
    },checkBtn: {
        backgroundColor: blue,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },quizBtn: {
        backgroundColor: orange,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    text: {
        fontSize: 35,
        marginBottom: 20,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
  
    },
    cards: {
        fontSize: 30,
        marginBottom: 20,
        padding: 10,
        alignSelf: 'center',
        color: green
  
    }
})