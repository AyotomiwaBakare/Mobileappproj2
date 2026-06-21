import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Post() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: `https://picsum.photos/300/300?random=2`,
            }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.username}>randomPoster123</Text>
          </View>

          <Ionicons name="ellipsis-horizontal" size={20} />
        </View>

        {/* Post Image */}
        <Image
          source={{
            uri: `https://picsum.photos/300/300?random=7`,
          }}
          style={styles.postImage}
        />

        {/* Actions */}
        <View style={styles.actions}>
          <View style={styles.leftIcons}>
            <Pressable>
              <Ionicons name="heart-outline" size={26} />
            </Pressable>

            <Pressable>
              <Ionicons name="chatbubble-outline" size={26} />
            </Pressable>

            <Pressable>
              <Ionicons name="paper-plane-outline" size={26} />
            </Pressable>
          </View>

          <Pressable>
            <Ionicons name="bookmark-outline" size={26} />
          </Pressable>
        </View>

        {/* Likes */}
        <Text style={styles.likes}>Liked by johnPork123</Text>

        {/* Caption */}
        <Text style={styles.caption}>
          <Text style={styles.bold}>randomPoster123</Text>
          Check out my post! This is to demonstrate Stack Navigation too.
        </Text>

        {/* Comments */}
        <Text style={styles.viewComments}>View all 10 comments</Text>
        <Text style={styles.comment}>user_name_123: Awesome!</Text>
        <Text style={styles.comment}>john_cena: Can you see me?</Text>

        {/* Time */}
        <Text style={styles.time}>1 day ago</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 15,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 14,
  },

  subUsername: {
    fontSize: 12,
    color: "gray",
  },

  postImage: {
    width: "100%",
    height: 380,
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
    paddingHorizontal: 15,
    fontWeight: "600",
  },

  caption: {
    paddingHorizontal: 15,
    marginTop: 4,
  },

  viewComments: {
    paddingHorizontal: 15,
    color: "gray",
    marginTop: 4,
  },

  comment: {
    paddingHorizontal: 15,
    marginTop: 2,
  },

  time: {
    paddingHorizontal: 15,
    marginTop: 4,
    fontSize: 11,
    color: "gray",
  },

  bold: {
    fontWeight: "bold",
  },
});
