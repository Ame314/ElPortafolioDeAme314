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
      link: "https://github.com/Ame314/ahorcado",
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
      <Menu scrollViewRef={scrollViewRef} />
      
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
        </View>
        
        <View style={styles.purpleSeparator} />
        
        <Skills/>

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
              onPress={() => openModal(
                "Certificado de Aprobación\n\nEducatics\nCentro de Capacitación y Certificación Profesional\n\nSe otorga el presente certificado a\nAmelie Grob Rosero\npor haber participado y aprobado el curso de:\nProgramación Orientada a Objetos con Python\ndesarrollado del 15 al 28 de febrero del 2024, con una duración de 40 horas académicas en modalidad virtual. El Centro de Capacitación y Certificación Profesional emite este certificado a la persona mencionada por cumplir con los parámetros establecidos en gestión académica y calidad educativa de la institución.\n\nEcuador, febrero de 2024\n\nMSC. Edwin Cárdenas\nCoordinador Académico\n\nMSC. Edisson Rubio\nGerente"
              )}
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

        <Link/>
      </ScrollView>
  </View>
 );
}