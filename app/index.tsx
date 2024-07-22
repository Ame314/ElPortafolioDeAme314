import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Modal,
  Animated,
} from "react-native";
import { styles } from "../carpetita/estilos"; // Asegúrate de que la ruta sea correcta

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [fadeInAnim] = useState(new Animated.Value(0)); // Animación para el fade-in
  const scrollViewRef = useRef(null);

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

  const handleScrollToSection = (section) => {
    const sectionMapping = {
      home: 0,
      about: 1,
      skills: 1,
      projects: 2,
      certificates: 4,
      contact: 5,
    };
    const sectionIndex = sectionMapping[section];
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: sectionIndex * 800, animated: true });
    }
  };

  const projects = [
    {
      title: "Connect 4",
      description: "This is a game developed in Java.",
      image: "https://ecdn.teacherspayteachers.com/thumbitem/Connect4-PowerPoint-Template-Create-Your-Own-Review-Game-1656583721/original-412622-1.jpg",
      link: "https://github.com/Ame314/juego4enlinea",
    },
    {
      title: "Hangman",
      description: "Juego del ahorcado desarrollado en c#.",
      image: "https://i.pinimg.com/736x/94/5d/81/945d81b5b521e4e9ee60b78c511043ef.jpg",
      link: "https://github.com/Ame314/ahorcado",
    },
    {
      title: "Noughts and crosses",
      description: "noughts and crosses game developed in c#.",
      image: "https://papergames.io/es/assets/games/tictactoe/thumbnail.png",
      link: "https://github.com/Ame314/3enlinea",
    },
    {
      title: "2048",
      description: "2048 game developed in Python.",
      image: "https://fscl01.fonpit.de/userfiles/4774964/image/AndroidPIT-2048-win.jpg",
      link: "https://github.com/Ame314/2048",
    },
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
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.logoText}>AG</Text>
        <View style={styles.navLinks}>
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
      
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
        <Animated.View style={[styles.heroSection, { opacity: fadeInAnim }]}>
          <Text style={styles.heroTitle}>
            I´m <Text style={styles.heroName}>Amelie Grob</Text>, Junior Developer
          </Text>
          <Text style={styles.heroSubtitle}>
            Third level in Information Technology.
          </Text>
        </Animated.View>

        <View style={styles.profileSection}>
          <Text style={styles.description}>Every day I learn something new.</Text>
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
          <View style={styles.certificateContainer}>
            <TouchableOpacity
              style={styles.certificateBox}
              onPress={() => openModal("Description of the certificate.")}
            >
              <Image
                source={{
                  uri: "https://web.whatsapp.com/3c2def66-5620-4645-99bd-5adacc5a9d6c",
                }}
                style={styles.certificateImage}
              />
            </TouchableOpacity>
          </View>
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
                  "https://www.linkedin.com/in/amelie-grob-ro/"
                )
              }
              style={styles.socialLink}
            >
              <Text style={styles.socialLinkText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/Ame314")}
              style={styles.socialLink}
            >
              <Text style={styles.socialLinkText}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://www.instagram.com/eilema_2006/")}
              style={styles.socialLink}
            >
              <Text style={styles.socialLinkText}>Twitter</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footerText}>© 2024 Amelie Grob. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}
