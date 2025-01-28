import { View, Text, Button } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the App!</Text>
      <Button title="Click Me" onPress={() => alert("Button Pressed!")} />
    </View>
  );
}
