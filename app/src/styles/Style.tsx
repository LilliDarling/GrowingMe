import { StyleSheet } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
