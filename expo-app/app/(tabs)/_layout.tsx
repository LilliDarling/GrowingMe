import { Link, Slot, Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  if (Platform.OS === 'web') {
    return <Slot />
  } else {
    return (
      <Tabs>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="post" />
      </Tabs>
    )
  }
}