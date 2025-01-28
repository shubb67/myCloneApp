import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const fruits = [
  { name: "Apple", route: "/apple" },
  { name: "Orange", route: "/orange" },
  { name: "Mango", route: "/mango" },
];

export default function List() {
  const router = useRouter();

  return (
    <View>
      {fruits.map((fruit) => (
        <TouchableOpacity
          key={fruit.name}
          onPress={() => router.push(fruit.route)}
        >
          <Text>{fruit.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
