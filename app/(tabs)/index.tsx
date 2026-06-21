import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="add-circle-outline" size={28} color="white" />
        <Text style={styles.logo}>Instagram</Text>
        <Ionicons name="heart-outline" size={28} color="white" />
      </View>

      {/* Stories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        {["Your Story", "John", "Emma", "David", "Alex"].map((story, index) => (
          <View key={index} style={styles.story}>
            <Image
              source={{
                uri: "https://picsum.photos/100?random=" + index,
              }}
              style={styles.storyImage}
            />
            <Text style={styles.storyText}>{story}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: "https://picsum.photos/50",
            }}
            style={styles.profilePic}
          />
          <Text style={styles.username}>unavalen_tinita</Text>
        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={22}
          color="white"
        />
      </View>

      {/* Post Image */}
      <Image
        source={{
          uri: "https://picsum.photos/600/700",
        }}
        style={styles.postImage}
      />

      {/* Action Icons */}
      <View style={styles.actions}>
        <View style={styles.leftIcons}>
          <Ionicons name="heart-outline" size={28} color="white" />
          <Ionicons name="chatbubble-outline" size={26} color="white" />
          <Ionicons name="paper-plane-outline" size={26} color="white" />
        </View>

        <Ionicons name="bookmark-outline" size={26} color="white" />
      </View>

      {/* Likes */}
      <Text style={styles.likes}>
        Liked by 333mikki and others
      </Text>

      {/* Caption */}
      <Text style={styles.caption}>
        <Text style={{ fontWeight: "bold" }}>
          unavalen_tinita
        </Text>{" "}
        Some flowers, some luck and cute vibes 🌸
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
  },

  logo: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },

  storiesContainer: {
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  story: {
    alignItems: "center",
    marginRight: 15,
  },

  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "hotpink",
  },

  storyText: {
    color: "white",
    marginTop: 5,
    fontSize: 12,
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  postImage: {
    width: "100%",
    height: 450,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },

  leftIcons: {
    flexDirection: "row",
    gap: 15,
  },

  likes: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 5,
  },

  caption: {
    color: "white",
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
  },
});