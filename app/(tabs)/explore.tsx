import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  View
} from "react-native";

const images = [
  "https://picsum.photos/300?random=1",
  "https://picsum.photos/300?random=2",
  "https://picsum.photos/300?random=3",
  "https://picsum.photos/300?random=4",
  "https://picsum.photos/300?random=5",
  "https://picsum.photos/300?random=6",
  "https://picsum.photos/300?random=7",
  "https://picsum.photos/300?random=8",
  "https://picsum.photos/300?random=9",
];

const numColumns = 3;

const size = Dimensions.get("window").width / numColumns;

export default function Explore() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Image Grid */}

      <FlatList
        data={images}
        numColumns={numColumns}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: size, height: size }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  searchContainer: {
    paddingHorizontal: 15,

    paddingVertical: 10,
  },

  searchInput: {
    backgroundColor: "#eee",

    padding: 10,

    borderRadius: 10,

    fontSize: 16,
  },
});
