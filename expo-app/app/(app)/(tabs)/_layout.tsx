import { Platform, View, Text, ScrollView } from "react-native";
import { Tabs, Link, usePathname, Slot } from "expo-router";
import type { Href } from "expo-router";
import { Image } from "expo-image";
import colors from "@/shared/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const pathname = usePathname();
  
  if (Platform.OS === 'web') {
    const navItems = [
      { title: "Home", route: "/home" },
      { title: "About", route: "/about" },
      { title: "Articles", route: "/articles" },
      { title: "Podcasts", route: "/podcasts" },
    ];

    return (
      <View className="min-h-screen flex-1">
        <View className="h-16 w-full bg-white border-b border-gray-200">
          <View className="max-w-7xl mx-auto h-full px-6 flex-row items-center justify-between">
            <View className="h-10 w-52">
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-full h-full object-contain"
                contentFit="contain"
              />
            </View>

            <View className="flex-row items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.route}
                  href={item.route as Href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.route
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </View>
          </View>
        </View>

        <ScrollView 
          className="flex-1"
          contentContainerClassName="min-h-screen"
          style={{ paddingTop: 5 }}
        >
          <View className="flex-1">
            <Slot />
          </View>
        </ScrollView>
      </View>
    );
  }

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
          href: null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="articles/index"
        options={{
          title: "Articles",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="article" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="podcasts/index"
        options={{
          title: "Podcasts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="podcasts" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}