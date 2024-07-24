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
import { styles } from "../carpetita/estilos";
import Menu from "../carpetita/menu";
import Skills from "../carpetita/skills";
import Link from "../carpetita/link";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [fadeInAnim] = useState(new Animated.Value(3)); // Animación para el fade-in
  const scrollViewRef = useRef(null);

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 11000,
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  const openModal = (content: { description: any; link?: any; }) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const projects = [
    {
      title: "Connect 4",
      description: "This is a game developed in Java.",
      image: "https://ecdn.teacherspayteachers.com/thumbitem/Connect4-PowerPoint-Template-Create-Your-Own-Review-Game-1656583721/original-412622-1.jpg",
      link: "https://github.com/Ame314/ProyectoConnect4/",
    },
    {
      title: "Hangman",
      description: "Juego del ahorcado desarrollado en c#.",
      image: "https://i.pinimg.com/736x/94/5d/81/945d81b5b521e4e9ee60b78c511043ef.jpg",
      link: "https://github.com/Ame314/Tarea_16-s2-Grob",
    },
    {
      title: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe game developed in c#.",
      image: "https://papergames.io/es/assets/games/tictactoe/thumbnail.png",
      link: "https://github.com/Ame314/ProyectoTresEnLinea",
    },
    {
      title: "2048",
      description: "2048 game developed in Python.",
      image: "https://fscl01.fonpit.de/userfiles/4774964/image/AndroidPIT-2048-win.jpg",
      link: "https://github.com/Ame314/Proyecto2048",
    },
  ];

  const renderProjects = () =>
    projects.map((project, index) => (
      <TouchableOpacity
        key={index}
        style={styles.projectBox}
        onPress={() => openModal(project)}
      >
        <Image source={{ uri: project.image }} style={styles.projectImage} />
        <Text style={styles.projectTitle}>{project.title}</Text>
      </TouchableOpacity>
    ));

  // Creando un efecto de aparición gradual
  const createFadeInAnimation = (value: Animated.Value) => {
    useEffect(() => {
      Animated.timing(value, {
        toValue: 1,
        duration: 11000,
        useNativeDriver: true,
      }).start();
    }, [value]);
  };

  // Añadiendo animaciones para cada sección
  const heroFadeAnim = useRef(new Animated.Value(3)).current;
  const profileFadeAnim = useRef(new Animated.Value(3)).current;
  const aboutFadeAnim = useRef(new Animated.Value(3)).current;
  const projectsFadeAnim = useRef(new Animated.Value(3)).current;
  const certificatesFadeAnim = useRef(new Animated.Value(3)).current;

  createFadeInAnimation(heroFadeAnim);
  createFadeInAnimation(profileFadeAnim);
  createFadeInAnimation(aboutFadeAnim);
  createFadeInAnimation(projectsFadeAnim);
  createFadeInAnimation(certificatesFadeAnim);

  return (
    <View style={styles.pageContainer}>
      <Menu scrollViewRef={scrollViewRef} />

      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
        <Animated.View style={[styles.heroSection, { opacity: heroFadeAnim }]}>
          <Text style={styles.heroTitle}>
            I´m <Text style={styles.heroName}>Amelie Grob</Text>, Junior Developer
          </Text>
          <Text style={styles.heroSubtitle}>
            Third level in Information Technology.
          </Text>
        </Animated.View>

        <Animated.View style={[styles.profileSection, { opacity: profileFadeAnim }]}>
          <Text style={styles.description}>Every day I learn something new.</Text>
        </Animated.View>

        <View style={styles.blackBar} />

        <Animated.View style={[styles.aboutSkillsSection, { opacity: aboutFadeAnim }]}>
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>About Me</Text>
            <Text style={styles.aboutDescription}>
            Hi, I'm Amelie Grob, a 17-year-old computer science student in my third semester of university with a passion for 
            technology and robotics. I have knowledge in several programming languages, including Java, C#, Python, C++ and React. 
            I have developed three significant projects: Connect 4, Tres en Línea and Ahorcado; one in Java and the others in C#.
            </Text>
          </View>
        </Animated.View>

        <View style={styles.purpleSeparator} />

        <Skills />

        <Animated.View style={[styles.projectsSection, { opacity: projectsFadeAnim }]}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.projectsRow}>{renderProjects()}</View>
        </Animated.View>

        <View style={styles.purpleSeparator} />

        <Animated.View style={[styles.certificatesSection, { opacity: certificatesFadeAnim }]}>
          <Text style={styles.sectionTitle}>Certificates</Text>
          <View style={styles.certificateContainer}>
            <TouchableOpacity
              style={styles.certificateBox}
              onPress={() =>
                openModal({
                  description:
                    "Certificate of Completion\n\nEducatics\nCenter for Professional Training and Certification\n\nThis certificate is awarded to\nAmelie Grob Rosero\nfor participating in and completing the course on:\nObject-Oriented Programming with Python\nheld from February 15 to February 28, 2024, with a duration of 40 academic hours.\n",
                })
              }
            >
              <Image
                source={require("../carpetita/img/certificado.png")}
                style={styles.certificateImage}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>{modalContent.description}</Text>
              {modalContent.link && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(modalContent.link)}
                  style={styles.linkButton}
                >
                  <Text style={styles.linkButtonText}>Open on GitHub</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Link />
      </ScrollView>
    </View>
  );
}
