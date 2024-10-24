import { View, Text, Pressable } from 'react-native'
import { styles } from './styles/Style'
import './App.css'


export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Pressable
        style={styles.button}
        onPress={() => alert('Button Pressed!')}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  )
}
