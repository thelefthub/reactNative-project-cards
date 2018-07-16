import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class DeckDetail extends Component {
    state = {}

    render() {
        return (
            <View>
                <Text>Deck Detail for deck: {this.props.navigation.state.params.title}</Text>
            </View>
        )

    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
  })