// useState save the value in a function and allow to be used on other function
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
  } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// this is the root component all components must be inside it. Like index.html
export default function App() {
  // constant is an empty array to store the list of goals.
  const[courseGoals, SetCourseGoals] = useState([])

  // add goal to list
  function addGoalHandler(enteredGoalText){
    console.log("clicked button value = " + enteredGoalText);
    // optional, use modern react (...) -> SetCourseGoals([...courseGoals, EnteredGoalText]);
    // rendering list without keys. below see, with keys SetCourseGoals(currentCourseGoals => [...currentCourseGoals, EnteredGoalText]);
    //currentCourseGoals is automatically provided by react (useState I think)

    // rendering with keys
    SetCourseGoals(currentCourseGoals => [
        ...currentCourseGoals,
        {text: enteredGoalText, id: Math.random().toString()}
    ]);
  };

  // function to delete item from list as you press on it
  function deleteGoalHandler(id) {
    console.log('DELETE');
    SetCourseGoals(currentCourseGoals => {
      // the filter will remove from array any item that does not match to id pressed.
      return currentCourseGoals.filter(
        (goal) => goal.id !== id
        );
    });
  }
  

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <Text> FlatList = loads list items as you scrolldown...</Text>
        <FlatList
          data={courseGoals}
          /* renderItem and itemData are from flatList. itemData is each Item from the array/list and some metadata */
          renderItem={(itemData) => {
            // <GoalItem /> is a custom component
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              //onDeleteItem is made up because GoalItem is a component that we made up too.
              onDeleteItem={deleteGoalHandler}/>;
          }}
          // if your data does not have a key because the API does not have it, you can make a key without changing the data.
          // "item" and "index" are automatic passed by flat list. making id=key.
          keyExtractor={(item, index) => {
            console.log ("item = " + item + "  /// index = " + index)
            return item.id;
          }}
          alwaysBounceVertical={false} />

        <Text> ScrollView example (loads all list items at once even if they do not show on the screen) ...</Text>
       {/* // maybe change key for id
        <ScrollView>
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
  goalsContainer : {
    flex: 5,
  },
});
