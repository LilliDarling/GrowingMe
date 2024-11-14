import { Text, View, Platform } from "react-native";
import { Image } from "expo-image";

export default function AboutPage() {

  const MobileLayout = () => (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold text-center mb-6">About Me</Text>

      <View className="mb-8">
        <View className="w-full mb-4">
          <Image
            source={require("@/assets/images/profile.png")}
            className="w-full h-48"
            contentFit="contain"
          />
        </View>
        <View>
          <Text className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text className="text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>

      <View className="mb-8">
        <View className="w-full mb-4">
          <Image
            source={require("@/assets/images/ragnar.png")}
            className="w-full h-48"
            contentFit="contain"
          />
        </View>
        <View>
          <Text className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text className="text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>

      <View className="items-center space-y-2">
        <Text className="text-base italic text-center">
          "There are far better things ahead than any we leave behind."
        </Text>
        <Text className="text-base font-medium">~ C.S. Lewis</Text>
      </View>
    </View>
  );

  const DesktopLayout = () => (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold text-center mb-6">About Me</Text>

      <View className="flex-row mb-8">
        <View className="w-1/3 mr-4">
          <Image
            source={require("@/assets/images/profile.png")}
            className="w-full h-40"
            contentFit="contain"
          />
        </View>
        <View className="flex-1">
          <Text className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text className="text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>

      <View className="flex-row mb-8">
        <View className="flex-1 mr-4">
          <Text className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text className="text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View className="w-1/3">
          <Image
            source={require("@/assets/images/ragnar.png")}
            className="w-full h-40"
            contentFit="contain"
          />
        </View>
      </View>

      <View className="items-center space-y-2">
        <Text className="text-base italic text-center">
          "There are far better things ahead than any we leave behind."
        </Text>
        <Text className="text-base font-medium">~ C.S. Lewis</Text>
      </View>
    </View>
  );

  return Platform.select({
    web: <DesktopLayout />,
    default: <MobileLayout />
  });
}