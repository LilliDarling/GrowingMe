import { Link, Slot, Stack } from 'expo-router';
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
  } else {
    return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    );
  }
}
