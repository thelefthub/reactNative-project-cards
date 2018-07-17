import { AsyncStorage } from 'react-native'

const CARD_STORAGE_KEY = 'cardsProject:card';

const DUMMY_DATA = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };

// get all decks
export function getDecks() {
    // AsyncStorage.getItem(CARD_STORAGE_KEY)
    // .then((results) => {
    //     console.log('waarom????');
    //     return setDummyData()
    // }).catch((err) => {
    //     console.log('error2', err);
    //   });
    // console.log('waarom????');
    // AsyncStorage.getItem(CARD_STORAGE_KEY).then((response) => {
    //     console.log('hallo????', response);
    //  })
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then(checkResults)
    
    
    
    
}

// get a specific deck
export function getDeck(deckKey) {
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => {
       return JSON.parse(results);
    }).then((parsed) => {
      return parsed[deckKey];
   }).catch(function(error) {
    console.log('err2: ',error);
  });

}

// add a new deck (title: 'title', questions: null)
export function addDeck(deckKey) {
    return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
        [deckKey]: { 'title' : deckKey, 'questions': [] }
      }))
}

// add a new card to a specified deck ({question: '', answer: ''})
export function addCard(deckKey, card) {
    // return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
    //     [deckKey]: questions.push(card)
    //   }))
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[deckKey].questions.push(card);
      AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(data))
    })

}

// check presence of data for testing purposes checkResults
function checkResults(results) {
    return results === null
      ? setDummyData()
      : JSON.parse(results)
  }

// provide dummy data for testing purposes
function setDummyData() {
    console.log("dummy use");
    AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(DUMMY_DATA));
    return DUMMY_DATA;
    
    
}

// for testing
export function deleteAll() {
    console.log("delete!");
    AsyncStorage.removeItem(CARD_STORAGE_KEY);
}