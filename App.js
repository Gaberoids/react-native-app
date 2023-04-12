import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// this is the root component all components must be inside it. Like index.html
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your course goal!' />
          <Button title='Add Goal'/>
      </View>
      <View>
          <Text> List of goals...</Text>
      </View>
    </View>
  );
}

// this is the style of app above since react native does not use CSS. Style objects, not inline style
const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccccc',
    width: '80%',
    margin: 8,
    padding: 8,
  }
});
