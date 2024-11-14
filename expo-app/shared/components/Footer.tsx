import { View, Text } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

export default function Footer() {
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