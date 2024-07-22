import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Contenedor principal de la página
  pageContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D", // Fondo blanco para la página completa
  },
  // Estilos para el encabezado
  header: {
    height: 80, // Altura del encabezado
    backgroundColor: "#000000", // Fondo negro para el encabezado
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  // Estilo del texto del logo
  logoText: {
    color: "#800080", // Color morado para el logo
    fontSize: 24,
    fontWeight: "bold",
  },
  // Contenedor para los enlaces de navegación
  navLinks: {
    flexDirection: "row",
  },
  // Estilo de cada enlace de navegación
  navLink: {
    color: "#ffffff", // Color blanco para los enlaces de navegación
    marginHorizontal: 10,
    fontSize: 16,
  },
  // Contenedor general
  container: {
    flexGrow: 1,
  },
  // Sección del héroe (principal)
  heroSection: {
    height: 800, // Altura de la sección principal
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000001", // Fondo gris claro para la sección principal
  },
  // Título principal
  heroTitle: {
    color:"#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  // Estilo del nombre en el título principal
  heroName: {
    color: "#800080", // Color morado para el nombre
  },
  // Subtítulo en la sección principal
  heroSubtitle: {
    fontSize: 24,
    color: "#FFFFF0",
    marginTop: 10,
  },
  // Sección del perfil
  profileSection: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // Descripción en la sección del perfil
  description: {
    color:"#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  // Barra negra para separar secciones
  blackBar: {
    height: 2,
    backgroundColor: "#800080", // Color morado para la barra separadora
    marginVertical: 20,
  },
  // Sección combinada de "About Me" y "Skills"
  aboutSkillsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  // Sub-sección "About Me"
  aboutSection: {
    width: "45%",
  },
  // Título de cada sección
  sectionTitle: {
    fontSize: 28,
    textAlign:"center",
    justifyContent:"center",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },
  // Descripción en la sección "About Me"
  aboutDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#ffffff",
  },
  // Separador vertical entre secciones
  skillsSeparator: {
    width: 2,
    backgroundColor: "#800080", // Color morado para el separador vertical
    height: "100%",
  },
  // Sub-sección de habilidades
  skillsSection: {
    width: "%",
  },
  // Contenedor para las habilidades
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  // Estilo de las imágenes de habilidades
  skillsImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  // Separador morado entre secciones
  purpleSeparator: {
    height: 2,
    backgroundColor: "#800080", // Color morado para el separador
    marginVertical: 20,
  },
  // Sección de proyectos
  projectsSection: {
    paddingHorizontal: 45, // Ajustado para padding horizontal
    paddingVertical: 50, // Ajusta padding vertical si es necesario
  },
  // Fila de proyectos
  projectsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  // Caja de cada proyecto
  projectBox: {
    width: "45%",
    backgroundColor: "#1a1a1a",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  // Imagen de cada proyecto
  projectImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  // Título de cada proyecto
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f1f1f1",
  },
  // Sección de certificados
  certificatesSection: {
    padding: 20,
    alignItems: "center",
  },
  // Contenedor para los certificados
  certificateContainer: {
    
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  // Caja de cada certificado
  certificateBox: {
    width: 400,
    height: 400,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  // Imagen de cada certificado
  certificateImage: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  // Fondo del modal
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  // Contenedor del modal
  modalContainer: {
    width: 300,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  // Texto del modal
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  // Botón de enlace en el modal
  linkButton: {
    backgroundColor: "#800080",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  // Texto del botón de enlace en el modal
  linkButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  // Botón de cierre en el modal
  closeButton: {
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  // Texto del botón de cierre en el modal
  closeButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  // Estilos para el pie de página
  footer: {
    backgroundColor: "#000000",
    padding: 20,
    alignItems: "center",
  },
  // Contenedor de enlaces en el pie de página
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  // Enlace social en el pie de página
  socialLink: {
    marginHorizontal: 10,
  },
  // Texto de enlace social en el pie de página
  socialLinkText: {
    color: "#ffffff",
    fontSize: 16,
  },
  // Texto del pie de página
  footerText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },




});
