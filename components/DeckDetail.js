import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Storage from '../utils/storage';
import { backGrey, orange, blue, white } from '../utils/colors'

function CardBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.cardBtn}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>New card</Text>
      </TouchableOpacity>
    )
}

function QuizBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.quizBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>Start quiz</Text>
      </TouchableOpacity>
    )
}


export default class DeckDetail extends Component {
    state = {
        deck : {}
    }

    componentDidMount() {
        Storage.getDeck(this.props.navigation.state.params.title).then((response) => {
            this.setState({deck: response})
            console.log('deck: ', this.state.deck);
            
        }).catch(function(error) {
            console.log('err: ',error);
          });
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Deck: {this.state.deck.title}</Text>
                <Text style={styles.cards}>Cards: {this.state.deck.questions == null ? '0' : this.state.deck.questions.length} cards</Text>
                <CardBtn onPress={() => navigation.navigate('AddCard', {title})} />
                <QuizBtn onPress={() => navigation.navigate('Quiz', {title})} />
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 10
    },cardBtn: {
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
  
    },
    cards: {
      fontSize: 30,
      // textDecorationLine: 'none',
      // textDecorationColor: orange,
      marginBottom: 20,
      padding: 10,
  
    }
})