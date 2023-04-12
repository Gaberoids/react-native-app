import { StyleSheet, Text, View, Button } from 'react-native';

// this is the root component all components must be inside it. Like index.html
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ margin:16, borderWidth: 2, borderColor: 'red', padding:16 }}> Another text</Text>
      <Text 
        style={styles.dummyText}>
        Hola Mundo!!!
      </Text>
      <Button title='Tap me' />
    </View>
  );
}

// this is the style of app above since react native does not use CSS. Style objects, not inline style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin:16,
    borderWidth: 2,
    borderColor: 'blue',
    padding:16,
  }
});
