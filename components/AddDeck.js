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

export default class AddDeck extends Component {
    state = {
        title: ""
    }

    // on submit
    submit = () => {
        Keyboard.dismiss();
        if(this.state.title !== "") {
            this.textInput.clear();
            Storage.addDeck(this.state.title);
            // let nav = this.state.title
            this.props.navigation.navigate('DeckDetail', {title:this.state.title});
            this.setState({
                title: ""
            });
            

        }
        

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.text}>Add new deck</Text>
                <TextInput
                style={styles.input}
                placeholder="Your title"
                onChangeText={(title) => this.setState({title})}
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
    marginBottom: 20,
    padding: 10,

  },
  input: {
    fontSize: 30,
    // textDecorationLine: 'none',
    // textDecorationColor: orange,
    marginBottom: 20,
    padding: 10,

  }
  })