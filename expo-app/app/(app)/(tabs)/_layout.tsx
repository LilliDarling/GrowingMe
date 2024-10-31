import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

// Wrap the Navigator with layout context for expo-router
const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <MaterialTopTabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#007AFF',
            height: 2,
          },
          tabBarLabelStyle: {
            textTransform: 'none',
            fontWeight: '500',
            fontSize: 14,
          },
          tabBarShowIcon: true,
          tabBarIconStyle: {
            width: 24,
            height: 24,
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#6b7280',
          lazy: false,
        }}
      >
        <MaterialTopTabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => (
              <MaterialIcons name="museum" size={24} />
            ),
          }}
        />
        <MaterialTopTabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: () => (
              <MaterialIcons name="person" size={24} />
            ),
          }}
        />
      </MaterialTopTabs>
    </View>
  );
}