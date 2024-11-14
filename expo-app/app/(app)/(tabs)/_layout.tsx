import { Platform, View, Text, ScrollView } from "react-native";
import { Tabs, Link, usePathname, Slot } from "expo-router";
import type { Href } from "expo-router";
import { Image } from "expo-image";
import colors from "@/shared/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

type NavigationItem = {
  title: string;
  route: string;
};

function Footer() {
  return (
    <View className="w-full bg-gray-800 py-8">
      <View className="max-w-7xl mx-auto px-6">
        <View className="flex-row justify-between items-start">
          <View className="flex-1 mr-12">
            <View className="h-10 w-52 mb-4">
              <Image
                source={require("@/assets/images/logo.png")}
                className="w-full h-full object-contain"
                contentFit="contain"
              />
            </View>
            <Text className="text-gray-300">
              Description / Tag Line
            </Text>
          </View>

          <View className="flex-1">
            <Text className="text-white font-bold mb-4">Quick Links</Text>
            <Link href="/about" className="text-gray-300 mb-2">About</Link>
            <Link href="/articles" className="text-gray-300 mb-2">Articles</Link>
            <Link href="/podcasts" className="text-gray-300">Podcasts</Link>
          </View>

          <View className="flex-1">
            <Text className="text-white font-bold mb-4">Contact</Text>
            <Text className="text-gray-300 mb-2">Email: contact@example.com</Text>
            <Text className="text-gray-300">Phone: (555) 123-4567</Text>
          </View>
        </View>

        <View className="mt-8 pt-8 border-t border-gray-700">
          <Text className="text-gray-400 text-center">
            © {new Date().getFullYear()} Valkyrie Remedy LLC. All rights reserved.
          </Text>
        </View>
      </View>
    </View>
  );
}

function WebNavigation() {
  const pathname = usePathname();

  const navItems: NavigationItem[] = [
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

        <Footer />
      </ScrollView>
    </View>
  );
}

function MobileNavigation() {
  return (
    <View className="flex-1">
      <View className="flex-1">
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
      </View>
      <Footer />
    </View>
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
