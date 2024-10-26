import { Link, Slot, Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function Layout() {
  if (Platform.OS === 'web') {
    return (
      <div>
        <header>
          <nav>
            <Link href="/home">Home</Link>
            <Link href="/post">Articles</Link>
          </nav>
        </header>
        <Slot />
      </div>
    );
  }
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="articles" options={{ title: 'Articles' }} />
    </Tabs>
  );
}
