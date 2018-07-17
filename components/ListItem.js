import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { backGrey, orange, blue, white } from '../utils/colors'

export default function ListItem ({ title, questions, navigation }) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeckDetail', {title})}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{questions.length} Cards</Text>
        </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: white,
        borderRadius: 2,
        padding: 35,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
        width: 0,
        height: 3
        }
    },
    title: {
        fontSize: 35,
        color: blue
      },
    text: {
    fontSize: 20,
    color: orange
    }
  })
