import { View, Text, Image, StyleSheet } from "react-native";

export default function Apple() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
