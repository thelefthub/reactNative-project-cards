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

function CorrectBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.correctBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>Correct</Text>
      </TouchableOpacity>
    )
}

function FalseBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.falseBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>False</Text>
      </TouchableOpacity>
    )
}

function RestartBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.restartBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>False</Text>
      </TouchableOpacity>
    )
}

function BackBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.backBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>False</Text>
      </TouchableOpacity>
    )
}

export default class Quiz extends Component {
    state = {
        deck: {
            title: '',
            questions: [{
                question: '',
                answer: ''
              }]
          },
        count: 0,
        check: false,
        score: 0,
        final: false

    }

    componentDidMount() {
        Storage.getDeck(this.props.navigation.state.params.title).then((response) => {
            this.setState({deck: response})
            console.log('deck: ', this.state.deck);
            
        })
    }

    onCheck = () => {
        this.setState({
            check: true,
        });
    }

    onCorrect = () => {
        this.setState((prevState, props) => ({
            score: prevState.score + 1,
            count: prevState.count + 1,
            check: false
          }));
    }

    onFalse = () => {
        this.setState((prevState, props) => ({
            count: prevState.count + 1,
            check: false
          }));
    }

    render() {
        return (
            <View>
                {!this.state.final ? 
                <View>
                    <Text style={styles.text}>Question {this.state.count+1} of {this.state.deck.questions.length}</Text>
                    <Text style={styles.cards}>{this.state.deck.questions[this.state.count].question}</Text>
                    <Text style={styles.answer}>{this.state.check ? this.state.deck.questions[this.state.count].answer : ''}</Text> 
                    <CheckBtn onPress={this.onCheck} />
                    <View style={styles.btnContainer}>
                        <CorrectBtn onPress={this.onCorrect} />
                        <FalseBtn onPress={this.onFalse} />
                    </View> 
                </View>
                :
                <View>
                    <Text style={styles.text}>Your Score: </Text>
                    <Text style={styles.cards}>{this.state.result}</Text>
                </View>
                }
            </View>
        )

    }

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10
    },btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        margin: 40
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
        margin: 10,
        width: 150
    },correctBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 150
      },falseBtn: {
        backgroundColor: orange,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 150
      },restartBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 150
      },backBtn: {
        backgroundColor: blue,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 150
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
    answer: {
        fontSize: 15,
        marginBottom: 20,
        padding: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        color: green,
  
    },
    cards: {
        fontSize: 20,
        marginBottom: 20,
        padding: 10,
        alignSelf: 'center',
        color: blue
  
    }
})