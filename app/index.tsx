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
    { title: "Juego 4 en línea", description: "Este es un juego desarrollado en Java.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtSlf1LjXZDCFYCcv5KdJvkLKNPU-Et1XIw&s", link: "https://github.com/Ame314/juego4enlinea" },
    { title: "Ahorcado", description: "Juego del ahorcado desarrollado en Java.", image: "https://i.pinimg.com/736x/94/5d/81/945d81b5b521e4e9ee60b78c511043ef.jpg", link: "https://github.com/Ame314/ahorcado" },
    { title: "3 en línea", description: "Juego 3 en línea desarrollado en Java.", image: "https://papergames.io/es/assets/games/tictactoe/thumbnail.png", link: "https://github.com/Ame314/3enlinea" },
    { title: "2048", description: "Juego 2048 desarrollado en Python.", image: "https://fscl01.fonpit.de/userfiles/4774964/image/AndroidPIT-2048-win.jpg", link: "https://github.com/Ame314/2048" },
  ];

  const renderProjects = () =>
    projects.map((project, index) => (
      <TouchableOpacity
        key={index}
        style={styles.projectBox}
        onPress={() => openModal(project.description)}
      >
        <Image source={{ uri: project.image }} style={styles.projectImage} />
        <Text style={styles.projectTitle}>{project.title}</Text>
      </TouchableOpacity>
    ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>AG</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.navLink}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.navLink}>Proyectos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.navLink}>Certificados</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.navLink}>Sobre mí</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>
          Soy <Text style={styles.heroName}>Amelie Grob</Text>, Junior Developer
        </Text>
        <Text style={styles.heroSubtitle}>Tercer nivel en tecnologías de la Información</Text>
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.description}>
          Cada día aprendiendo algo nuevo.
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
        <View style={styles.skillsSeparator} />
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
        </View>
      </View>

      <View style={styles.purpleSeparator} />

      <View style={styles.projectsSection}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.projectsRow}>{renderProjects()}</View>
      </View>

      <View style={styles.purpleSeparator} />

      <View style={styles.certificatesSection}>
        <Text style={styles.sectionTitle}>Certificates</Text>
        <TouchableOpacity
          style={styles.certificateBox}
          onPress={() => openModal("Description of the certificate.")}
        >
          {/* Replace with your certificate image */}
          <Image
            source={{
              uri: "https://example.com/certificate-image.jpg",
            }}
            style={styles.certificateImage}
          />
        </TouchableOpacity>
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
              onPress={() => Linking.openURL(modalContent.link)}
              style={styles.linkButton}
            >
              <Text style={styles.linkButtonText}>Open on GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
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
    width: "100%",
    backgroundColor: "#000000",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    color: "#800080", // Morado
    fontWeight: "bold",
  },
  navLinks: {
    flexDirection: "row",
  },
  navLink: {
    fontSize: 18,
    color: "#ffffff",
    marginHorizontal: 10,
  },
  heroSection: {
    width: "100%",
    padding: 40,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 36,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroName: {
    color: "#800080", // Morado
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  profileSection: {
    width: "100%",
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  blackBar: {
    width: "90%",
    height: 2,
    backgroundColor: "#800080", // Morado
    marginVertical: 20,
  },
  aboutSkillsSection: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#0d0d0d",
  },
  aboutSection: {
    width: "100%",
    paddingRight: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 16,
    color: "#ffffff",
  },
  skillsSeparator: {
    width: "100%",
    height: 2,
    backgroundColor: "#800080", // Morado
    marginVertical: 20,
  },
  skillsSection: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillsImage: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  purpleSeparator: {
    width: "100%",
    height: 2,
    backgroundColor: "#800080", // Morado
    marginVertical: 20,
  },
  projectsSection: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#0d0d0d",
  },
  projectsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  projectBox: {
    width: "48%",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  projectImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  certificatesSection: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#0d0d0d",
  },
  certificateBox: {
    width: "48%",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  certificateImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#800080", // Morado
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  footer: {
    width: "100%",
    backgroundColor: "#000000",
    paddingVertical: 20,
    alignItems: "center",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  projectImgcont: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#ffffff",
  },
});
