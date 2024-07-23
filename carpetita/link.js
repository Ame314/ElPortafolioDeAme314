import React from "react";
import { View, TouchableOpacity, Linking, Image, Text } from "react-native";
import { styles } from "../carpetita/estilos";

export const Link = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/amelie-grob-ro/")
          }
          style={styles.socialLink}
        >
          <Image
            style={styles.contactoImage}
            source={require("./img/linkedin_icon.png")} // Ruta local de la imagen
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/Ame314")}
          style={styles.socialLink}
        >
          <Image
            style={styles.contactoImagegithub}
            source={require("./img/github_git_hub.png")} // Ruta local de la imagen
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/eilema_2006/")
          }
          style={styles.socialLink}
        >
          <Image
            style={styles.contactoImage}
            source={require("./img/instagramlogo1.jpg")} // Ruta local de la imagen
          />
        </TouchableOpacity>

      </View>
      <Text style={styles.footerText}>© 2024 Amelie Grob. All rights reserved.</Text>
    </View>
  );
};

export default Link;
