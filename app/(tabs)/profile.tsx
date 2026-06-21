import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
export default function ProfileScreen() {
  const images = new Array(12).fill(null);

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}

      <Text style={styles.usernameTop}>RandomInstagramUser123</Text>

      {/*PROFILE INFO */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.avatar}
        />

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>67</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>540</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>180</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* BIO */}

      <View style={styles.bio}>
        <Text style={styles.name}>
          Hello This is My Bio! I am a Random Person, Lives on Earth.
        </Text>
        <Text style={styles.bioText}></Text>
      </View>

      {/* Buttons under Bio */}

      <View style={styles.buttonRow}>
        <Text style={styles.button}>Edit Profile</Text>
        <Text style={styles.button}>Share Profile</Text>
      </View>

      {/* STORIES */}

      <View style={styles.storiesRow}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.storyImage}
        />
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.storyImage}
        />
      </View>

      {/* POSTS */}

      <View style={styles.grid}>
        {images.map((_, index) => (
          <Image
            source={{
              uri: `https://picsum.photos/300/300?random=${index + 20}`,
            }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  usernameTop: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  stats: {
    flexDirection: "row",
    marginLeft: 25,
    gap: 20,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  statLabel: {
    color: "white",
    fontSize: 12,
  },

  bio: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  name: {
    color: "white",
    fontWeight: "bold",
  },

  bioText: {
    color: "white",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  gridImage: {
    width: "33.33%",
    height: 120,
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#3498DB",
  },

  storiesRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
  },

  buttonRow: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  button: {
    flex: 1,
    backgroundColor: "#222",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 6,
    fontWeight: "bold",
  },
});
