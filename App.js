import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { backGrey, lightGrey, darkGrey, blue } from './utils/colors'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { setLocalNotification } from './utils/helpers'


const TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
    },
    tabBarOptions: {
      activeTintColor: blue
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    },
    tabBarOptions: {
      activeTintColor: blue
    }
  },
});


const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: "Home"
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: "Detail"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Card"
    }
  }
});


export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <View style={{flex: 1}}>
       <MainNavigator />
       </View>
    );
  }
}
