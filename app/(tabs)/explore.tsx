import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function SearchScreen() {
  const images = Array.from({ length: 15 });

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search with Meta AI"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>

      <ScrollView>
        <View style={styles.grid}>
          {images.map((_, index) => (
            <Image
              key={index}
              source={{
                uri: `https://picsum.photos/300/300?random=${index + 20}`,
              }}
              style={styles.gridImage}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    marginHorizontal: 12,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 40,
  },
  input: {
    color: "white",
    marginLeft: 8,
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridImage: {
    width: "33.33%",
    height: 135,
    borderWidth: 1,
    borderColor: "#000",
  },
});
