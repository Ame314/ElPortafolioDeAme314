import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../carpetita/estilos";

const Menu = ({ scrollViewRef }) => {
  const handleScrollToSection = (section) => {
    const sectionMapping = {
      home: 0,
      about: 1,
      skills: 1.2,
      projects: 1.6,
      certificates: 2.3,
      contact: 5,
    };
    const sectionIndex = sectionMapping[section];
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: sectionIndex * 800, animated: true });
    }
  };

  return (
    <View style={styles.header}>
      
      <View style={styles.navLinks}>
      <Text style={styles.logoText}>AG</Text>
        <TouchableOpacity onPress={() => handleScrollToSection("home")}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToSection("about")}>
          <Text style={styles.navLink}>About me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToSection("skills")}>
          <Text style={styles.navLink}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToSection("projects")}>
          <Text style={styles.navLink}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToSection("certificates")}>
          <Text style={styles.navLink}>Certificates</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScrollToSection("contact")}>
          <Text style={styles.navLink}>Contact me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;