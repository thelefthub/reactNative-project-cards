import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { backGrey, orange, blue, white } from '../utils/colors'
import * as Storage from '../utils/storage';


function SubmitBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.SubmitBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>SUBMIT</Text>
      </TouchableOpacity>
    )
}

export default class AddCard extends Component {
    state = {
        question: "",
        answer: ""
    }

    // on submit
    submit = () => {
        Keyboard.dismiss();
        if(this.state.title !== "") {
            this.textInput.clear();
            Storage.addCard(this.props.navigation.state.params.title, this.state)
            .then(() => {
                let nav = this.props.navigation.state.params.title
                this.setState({
                    question: "",
                    answer: ""
                });
                this.props.navigation.navigate('DeckDetail', {nav});
             })
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.text}>Add new card</Text>
                <TextInput
                style={styles.input}
                placeholder="Your question"
                onChangeText={(question) => this.setState({question})}
                ref={input => { this.textInput = input }}
                />
                <TextInput
                style={styles.input}
                placeholder="Your answer"
                onChangeText={(answer) => this.setState({answer})}
                ref={input => { this.textInput = input }}
                />
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )

    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
  },SubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  text: {
    fontSize: 35,
    marginBottom: 5,
    padding: 10,

  },
  input: {
    fontSize: 30,
    // textDecorationLine: 'none',
    // textDecorationColor: orange,
    marginBottom: 10,
    padding: 10,

  }
  })