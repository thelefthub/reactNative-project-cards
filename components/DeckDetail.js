import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Storage from '../utils/storage';
import { backGrey, orange, blue, white } from '../utils/colors'

function CardBtn ({ onPress }) {
    return (
      <TouchableOpacity
        style={styles.cardBtn}
        onPress={onPress}>
          <Text style={styles.btnText}>New card</Text>
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
            
        })
    }

    componentDidUpdate() {
        console.log('update detail');
        
        // Storage.getDecks().then((response) => {
        //     if (Object.keys(this.state.list).length != Object.keys(response).length) {
        //         this.setState({list: response})
        //     }
        // });
        Storage.getDeck(this.props.navigation.state.params.title).then((response) => {
            console.log('deck state: ', this.state.deck);
            console.log('deck rest: ', response);
            if (response.questions.length != this.state.deck.questions.length) {
                this.setState({deck: response})
                console.log('deck updated: ', this.state.deck);
            }
        })
    }

    render() {
        return (
            <View>
                {/* <Text style={styles.text}>param: {this.props.navigation.state.params.title}</Text> */}
                <Text style={styles.text}>{this.state.deck.title}</Text>
                <Text style={styles.cards}>{this.state.deck.questions == null ? '0' : this.state.deck.questions.length} cards</Text>
                <CardBtn onPress={() => this.props.navigation.navigate('AddCard', {'title':this.state.deck.title})} />
                <QuizBtn onPress={() => this.props.navigation.navigate('Quiz', {'title':this.state.deck.title})} />
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
  
    }
})