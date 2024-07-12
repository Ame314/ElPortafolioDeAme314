import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Portfolio() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://puceseedu-my.sharepoint.com/personal/agrob_pucese_edu_ec/Documents/Im%c3%a1genes/Capturas%20de%20pantalla/Captura%20de%20pantalla%202024-05-01%20182338.png?Web=1' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Ame Grob</Text>
      <Text style={styles.description}>
        Estudiante de Tecnología de la Información con interés en el desarrollo de software y diseño de interfaces de usuario.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
