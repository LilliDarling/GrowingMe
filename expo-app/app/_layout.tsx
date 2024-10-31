import { View } from "react-native";
import { Image } from "expo-image";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cssInterop } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaEnv } from "react-native-css-interop/dist/runtime/api";

// component interops for nativewind - just need these once
cssInterop(Image, { className: "style" });

// TODO: Auth & Redirect
export default function App() {
  const queryClient = new QueryClient();

  return (
    <View style={[{ flex: 1 }, useSafeAreaEnv()]}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
      <StatusBar style="auto" />
    </View>
  );
}