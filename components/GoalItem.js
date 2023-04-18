//no need to import a react stuff
import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    // text is from app.js <GoalItem />
    return (
        <View style={styles.goalItem} >
            <Pressable
                android_ripple={{color: '#dddddd'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                { console.log("onPress -- this = " + this + "props.id = " + props.id) }
                    <Text style={styles.goalText} >Goal key = x = {props.text}</Text>
            </Pressable>
        </View>

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: 'red'
    },
    goalText: {
        color: 'white',
        padding:8,
    },
    
});