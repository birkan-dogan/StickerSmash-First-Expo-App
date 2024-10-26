import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Linking,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AboutScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const githubUsername = "birkan-dogan";

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((response) => response.json())
      .then((data) => setProfileImage(data.avatar_url))
      .catch((error) =>
        console.error("Error fetching GitHub profile image:", error)
      );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>

      {/* Profil resmi yüklendiyse göster, aksi halde yükleniyor animasyonu */}
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.image} />
      ) : (
        <ActivityIndicator size="large" color="#1E90FF" />
      )}

      {/* GitHub Linki */}
      <Pressable
        style={styles.iconContainer}
        onPress={() => Linking.openURL(`https://github.com/${githubUsername}`)}
      >
        <FontAwesome name="github" size={24} color="#f3f3f3" />
        <Text style={styles.link}>GitHub</Text>
      </Pressable>

      {/* LinkedIn Linki */}
      <Pressable
        style={styles.iconContainer}
        onPress={() =>
          Linking.openURL("https://www.linkedin.com/in/birkandogandeveloper/")
        }
      >
        <FontAwesome name="linkedin" size={24} color="#1E90FF" />
        <Text style={styles.link}>LinkedIn</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 32,
    backgroundColor: "#25292e",
  },
  text: {
    color: "#f3f3f3",
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    width: 84,
    alignItems: "center",
    marginVertical: 5,
  },
  link: {
    color: "#f3f3f3",
    fontSize: 18,
    marginLeft: 8,
  },
});
