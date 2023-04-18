//no need to import a react stuff
import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    // text is from app.js <GoalItem />
    return (
    <Pressable onPress={props.onDeleteItem}>
        <View style={styles.goalItem} >
            <Text style={styles.goalText} >Goal key = x = {props.text}</Text>
        </View>
    </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
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