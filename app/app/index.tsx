import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Root() {
  return (
    <View>
      <Link href="/home">Home</Link>
      <Link href="/post">Post</Link>
    </View>
  )
}
