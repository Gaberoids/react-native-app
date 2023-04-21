import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image
     } from "react-native";

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
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
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
                            color="#5e0acc"
                        />
                    </View>
                    <View style={styles.button} >
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            color="#f31282"
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
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        margin: 8,
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },

});

