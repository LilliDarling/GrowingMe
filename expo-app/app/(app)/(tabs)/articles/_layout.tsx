import { Stack } from "expo-router";
import React from "react";

export default function AritlcePage() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="articles"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}