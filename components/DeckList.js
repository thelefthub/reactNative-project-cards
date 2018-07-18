import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import * as Storage from '../utils/storage'
import ListItem from './ListItem'


export default class DeckList extends Component {
    state = {
        list : {}
    }
    
    componentDidMount() {
        Storage.getDecks().then((response) => {this.setState({list: response})});

        const willFocusSub = this.props.navigation.addListener(
            'willFocus',
            payload => {
              console.log('didBlur', payload);
              Storage.getDecks().then((response) => {this.setState({list: response})});
            }
        );
    }

    // componentDidUpdate() {
    //     Storage.getDecks().then((response) => {
    //         if (Object.keys(this.state.list).length != Object.keys(response).length) {
    //             this.setState({list: response})
    //         }
    //     });
    // }

    componentWillUnmount() {
        this.willFocusSub.remove();
      }

    render() {
                
        let renderList = Object.keys(this.state.list).map(title => ({title, questions: this.state.list[title].questions}));
       
        return (
            <View>
                <FlatList
                    data={renderList}
                    keyExtractor={(item) => item.title}
                    renderItem={
                    ({item}) =>
                    <ListItem
                        key={item.title}
                        title={item.title}
                        questions={item.questions}
                        navigation={this.props.navigation}
                    />
                    }
                />
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