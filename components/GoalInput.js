import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
    // enteredGoalText is the Key, setEnteredGoalText is the value of the key.
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    //input field goal handler
    function goalInputHandler(enteredText) {
        // console.log("enteredText = " + enteredText);
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        // below will clear the input field after a goal is added
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder='Your course goal!'
                onChangeText={goalInputHandler}
                // value was added to clear input field after pressing button (setEnteredGoal(''))
                value={enteredGoalText}

            />
            {/* onAddgoal is made it up by me */}
            <Button
                title='Add Goal'
                onPress={addGoalHandler}
            />
      </View>
    );
}


export default GoalInput;

const styles = StyleSheet.create({
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

});

