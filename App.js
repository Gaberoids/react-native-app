// useState save the value in a function and allow to be used on other function
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
    // optional, use modern react (...) => SetCourseGoals([...courseGoals, EnteredGoalText]);
    SetCourseGoals(currentCourseGoals => [...currentCourseGoals, EnteredGoalText]);
    //currentCourseGoals is automatically provided by react (useState I think)
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
          <Text> List of goals...</Text>
          {courseGoals.map((goal) => <Text key={'key' + goal}>Goal x = {goal}</Text>)}
      </View>
    </View>
  );
}

// this is the style of app above since react native does not use CSS. Style objects, not inline style
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
  }
});
