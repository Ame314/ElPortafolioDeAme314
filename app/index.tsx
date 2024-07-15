import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Modal,
} from "react-native";

export default function Portfolio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const skills = [
    { title: "Habilidad 1", description: "Información sobre Habilidad 1" },
    { title: "Habilidad 2", description: "Información sobre Habilidad 2" },
    { title: "Habilidad 3", description: "Información sobre Habilidad 3" },
  ];

  const projects = [
    { title: "Proyecto 1", description: "Descripción del proyecto 1" },
    { title: "Proyecto 2", description: "Descripción del proyecto 2" },
    { title: "Proyecto 3", description: "Descripción del proyecto 3" },
    { title: "Proyecto 4", description: "Descripción del proyecto 4" },
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Ame Grob</Text>
        <Text style={styles.subHeaderText}>Junior Developer</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://generated-assets.prod.myninja.ai/ce0a7a40-de2a-469a-9daf-a502084cce7e/46cd4b54-f198-4b41-a185-2e5f1218e26e_0.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.description}>
          Estudiante de Tecnología de la Información.
        </Text>
      </View>

      <View style={styles.blackBar} />

      <View style={styles.aboutSection}>
        <View style={styles.aboutTextContainer}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.aboutDescription}>
            Soy Amelie, tengo 17 años y me gusta dormir.
          </Text>
        </View>
        <Image
          source={{
            uri: "https://generated-assets.prod.myninja.ai/ce0a7a40-de2a-469a-9daf-a502084cce7e/46cd4b54-f198-4b41-a185-2e5f1218e26e_0.png",
          }}
          style={styles.aboutImage}
        />
      </View>

      <View style={styles.blackBar} />

      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsRow}>
          {skills.map((skill, index) => (
            <TouchableOpacity
              key={index}
              style={styles.skillBox}
              onPress={() => openModal(skill.description)}
            >
              <Text style={styles.skillTitle}>{skill.title}</Text>
            </TouchableOpacity>
          ))}
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
    alignItems: "center",
    marginBottom: 20,
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
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
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
    backgroundColor: "#000000",
    marginVertical: 20,
  },
  aboutSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  aboutTextContainer: {
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
  aboutImage: {
    flex: 1,
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  skillsSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  skillsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  skillBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
  },
  skillTitle: {
    fontSize: 20,
    color: "#ffffff",
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
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "white",
    alignItems: "center",
  },
  linksContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "#1e90ff",
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
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  projectImgcont: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginRight: 5,
  },
});
