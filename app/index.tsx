import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Modal,
  Animated,
} from "react-native";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [fadeInAnim] = useState(new Animated.Value(0)); // Animación para el fade-in

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const projects = [
    { title: "Juego 4 en línea", description: "Jueguito " },
    { title: "Ahorcado", description: "Jueguito" },
    { title: "3 en línea", description: "Descripción del proyecto 3" },
    { title: "2048", description: "Descripción del proyecto 4" },
  ];

  const renderProjects = () =>
    projects.map((project, index) => (
      <TouchableOpacity
        key={index}
        style={styles.projectBox}
        onPress={() => openModal(project.description)}
      >
        <Text style={styles.projectTitle}>{project.title}</Text>
      </TouchableOpacity>
    ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.header}>
          <View style={styles.headerTextContainer}>
            <Animated.Text
              style={[styles.headerText, { opacity: fadeInAnim }]}
            >
              Ame Grob
            </Animated.Text>
            <Animated.Text
              style={[styles.subHeaderText, { opacity: fadeInAnim }]}
            >
              Junior Developer
            </Animated.Text>
          </View>
          <Image
            source={{
              uri: "https://generated-assets.prod.myninja.ai/ce0a7a40-de2a-469a-9daf-a502084cce7e/46cd4b54-f198-4b41-a185-2e5f1218e26e_0.png",
            }}
            style={styles.profileImage}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.profileSection}>
        <Text style={styles.description}>
          Estudiante de Tecnología de la Información.
        </Text>
      </View>

      <View style={styles.blackBar} />

      <View style={styles.aboutSkillsSection}>
        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutDescription}>
            Hi, I'm Amelie Grob, a 17-year-old computer science student in my
            third semester of university. I have a strong passion for technology
            and robotics.
          </Text>
        </View>
        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills</Text>
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
        </View>
      </View>

      <View style={styles.blackBar} />

      <View style={styles.projectsSection}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.projectsRow}>{renderProjects()}</View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalContent}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <View style={styles.linksContainer}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/amelie-grob-rosero-96aa45318/"
              )
            }
          >
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png",
              }}
              style={styles.projectImgcont}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Ame314")}
          >
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png",
              }}
              style={styles.projectImgcont}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/eilema_2006/")
            }
          >
            <Image
              source={{
                uri: "https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580635-yumminkysocialmedia26_83102.png",
              }}
              style={styles.projectImgcont}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>© 2024 Ame Grob</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  headerTextContainer: {
    maxWidth: "50%",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subHeaderText: {
    fontSize: 24,
    color: "#b3b3b3",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    color: "#b3b3b3",
    textAlign: "center",
    marginHorizontal: 20,
  },
  blackBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#800080", // Morado
    marginVertical: 20,
  },
  aboutSkillsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  aboutSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 18,
    color: "#b3b3b3",
    textAlign: "center",
  },
  skillsSection: {
    flex: 1,
    alignItems: "center",
  },
  skillsImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  projectsSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  projectsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  projectBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    width: "45%",
    marginVertical: 10,
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 20,
    color: "#ffffff",
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20, // Agregué la coma que faltaba aquí
    borderTopColor: "white",
    alignItems: "center",
  },
  linksContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "#800080", // Morado
    textDecorationLine: "underline",
    marginHorizontal: 10,
  },
  footerText: {
    color: "#ffffff",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#800080", // Morado
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  projectImgcont: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginRight: 5,
  },});