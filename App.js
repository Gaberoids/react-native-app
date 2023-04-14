// useState save the value in a function and allow to be used on other function
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
  } from 'react-native';

// this is the root component all components must be inside it. Like index.html
export default function App() {
  // enteredGoalText is the Key, setEnteredGoalText is the value of the key.
  const [EnteredGoalText, setEnteredGoalText] = useState('');
  // constant is an empty array to store the list of goals.
  const[courseGoals, SetCourseGoals] = useState([])

  //input field goal handler
  function goalInputHandler(enteredText) {
    console.log("enteredText = " + enteredText)
    setEnteredGoalText(enteredText);
  };

  // add goal to list
  function addGoalHandler(){
    console.log("clicked button value = " + EnteredGoalText);
    // optional, use modern react (...) -> SetCourseGoals([...courseGoals, EnteredGoalText]);
    // rendering list without keys. below see, with keys SetCourseGoals(currentCourseGoals => [...currentCourseGoals, EnteredGoalText]);
    //currentCourseGoals is automatically provided by react (useState I think)

    // rendering with keys
    SetCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: EnteredGoalText, id: Math.random().toString()}
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            />
          <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text> FlatList = loads list items as you scrolldown...</Text>
        <FlatList
          data={courseGoals}
          /* renderItem and itemData are from flatList. itemData is each Item from the array/list and some metadata */
          renderItem={(itemData) => {
            // itemData.index is built in from FlatList too
            // itemData.index
            return (
              <View style={styles.goalItem} >
                <Text style={styles.goalText} >Goal key = x = {itemData.item.text}</Text>
              </View>
            );
          }}
          // if your data does not have a key because the API does not have it, you can make a key without changing the data.
          // item and index are automatic passed by flat list. making id=key.
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />

        <Text> ScrollView example (loads all list items at once even if they do not show on the screen) ...</Text>
        {/* <ScrollView>
            {courseGoals.map((goal) => 
              <View style={styles.goalItem} key={'key' + goal}>
                <Text style={styles.goalText} >Goal x = {goal}</Text>
              </View>)}
        </ScrollView> */}
      </View>
    </View>
  );
}

// this is the style of app above since react native does not use CSS. Style objects, not inline style
// this style does not cascade to other elements or inhirite from other elements.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth:1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    margin: 8,
    padding: 8,
  },
  goalsContainer : {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
