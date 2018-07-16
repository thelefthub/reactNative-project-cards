import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import * as Storage from '../utils/storage';
import ListItem from './ListItem'


export default class DeckList extends Component {
    state = {
        list : {}
    }

    componentDidMount() {
        // Storage.deleteAll();
        Storage.getDecks().then((response) => {this.setState({list: response})});
    }

    componentDidUpdate() {
        //infinite loop!!!! check if list has changed...
        //Storage.getDecks().then((response) => {this.setState({list: response})});
    }

    render() {
                
        let renderList = Object.keys(this.state.list).map(title => ({title, questions: this.state.list[title].questions}));
        // console.log(this.state.list);
        // console.log(renderList);
        
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