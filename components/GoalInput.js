import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        // "visible" is a made up word
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    // value was added to clear input field after pressing button (setEnteredGoal(''))
                    value={enteredGoalText}

                />
                {/* onAddgoal is made it up by me */}
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button} >

                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>

        </Modal>
    );
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth:1,
        borderBottomColor: "#cccccc",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        margin: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },

});

