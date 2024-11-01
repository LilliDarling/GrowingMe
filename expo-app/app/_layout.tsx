import { View } from "react-native";
import { Image } from "expo-image";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cssInterop } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "@/global.css";

cssInterop(Image, { className: "style" });

export default function App() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}