import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';

export default function Portfolio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ame Grob</Text>
        <Text style={styles.subHeaderText}>Futura ingegneria</Text>
      </View>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://puceseedu-my.sharepoint.com/personal/agrob…a%20de%20pantalla%202024-05-01%20182338.png?Web=1' }} // Actualiza esto con la URL correcta
          style={styles.profileImage} 
        />
        <Text style={styles.description}>
          Estudiante de Tecnología de la Información, actualmente en tercer nivel con interés en el desarrollo.
        </Text>
      </View>
      <View style={styles.skillsSection}>
        <View style={styles.skillBox}>
          <Text style={styles.skillTitle}>Habilidad 1 que auún no sé</Text>
          <Text style={styles.skillDescription}>*Información*.</Text>
        </View>
        <View style={styles.skillBox}>
          <Text style={styles.skillTitle}>Habilidad 2 que auún no sé</Text>
          <Text style={styles.skillDescription}>*Información*</Text>
        </View>
        <View style={styles.skillBox}>
          <Text style={styles.skillTitle}>Habilidad 3 que auún no sé</Text>
          <Text style={styles.skillDescription}>*Información*</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/amelie-grob-rosero-96aa45318/')}>
            <Text style={styles.link}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Ame314')}>
            <Text style={styles.link}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/eilema_2006/')}>
            <Text style={styles.link}>Instagram</Text>
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
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subHeaderText: {
    fontSize: 24,
    color: '#b3b3b3',
  },
  profileSection: {
    alignItems: 'center',
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
    color: '#b3b3b3',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  skillsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  skillBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  skillTitle: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
  },
  skillDescription: {
    fontSize: 16,
    color: '#b3b3b3',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#1e90ff',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  footerText: {
    color: '#ffffff',
  },
});
