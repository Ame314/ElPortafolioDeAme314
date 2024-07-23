import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "../carpetita/estilos";

export const Skills =()=>{
  return (
    <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2415/PNG/512/python_original_logo_icon_146381.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2407/PNG/512/docker_icon_146192.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/159/PNG/256/java_22523.png",
              }}
              style={styles.skillsImage}
            />
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png",
              }}
              style={styles.skillsImage}
            />
          </View>
          <View style={styles.blackBar} />
      </View>
  );
};

export default Skills;