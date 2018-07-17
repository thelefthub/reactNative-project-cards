import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { backGrey, orange, blue, white } from '../utils/colors'
import * as Storage from '../utils/storage';

export default class Quiz extends Component {
    state = {
        deck: ""
    }

    render() {
        return (
            <View>
                <Text>Trivial time!</Text>
            </View>
        )

    }

}