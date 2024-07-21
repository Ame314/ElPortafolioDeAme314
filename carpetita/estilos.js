import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: '#000', // Color de fondo del menú
    padding: 10, // Espacio alrededor del menú
    flexDirection: 'row', // Alineación horizontal
    justifyContent: 'space-between', // Espacio entre elementos
    width: '100%',
    alignItems: 'center',
  },
  logoText: {
    color: "#800080", // Morado
    fontSize: 24,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    marginHorizontal: 10,
    color: "#ffffff",
    fontSize: 16,
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
  aboutHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  aboutImage: {
    width: 60, // Ajusta el tamaño de la imagen según sea necesario
    height: 60,
    borderRadius: 30, // Hace que la imagen sea circular (ajusta según necesites)
    marginRight: 10,
  },
});
