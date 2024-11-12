import React from "react";
import { Platform } from "react-native";
import { Tabs, Link, usePathname, Slot } from "expo-router";
import type { Href } from "expo-router";
import { Image } from "expo-image";
import colors from "@/shared/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

type NavigationItem = {
  title: string;
  route: string;
};

function WebNavigation() {
  const pathname = usePathname();

  const navItems: NavigationItem[] = [
    { title: "Home", route: "/" },
    { title: "Articles", route: "/articles" },
    { title: "About", route: "/about" },
  ];

  return (
    <div className="h-16 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <div className="h-10 w-52 relative">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-full h-full object-contain"
            contentFit="contain"
          />
        </div>

        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.route}
              href={item.route as Href<string>}
              className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                pathname === item.route
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <Slot />
    </div>
  );
}

function MobileNavigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: "Articles",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <>
      {Platform.select({
        web: <WebNavigation />,
        default: <MobileNavigation />,
      })}
    </>
  );
}
