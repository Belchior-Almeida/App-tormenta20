import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao RPG Tormenta</Text>
      <Text style={styles.subtitle}>Sua jornada comeca aqui.</Text>
      <Link style={styles.button} href="/">
        Voltar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f1115"
  },
  title: {
    fontSize: 26,
    marginBottom: 8,
    color: "#f5f7ff",
    fontWeight: "700",
    textAlign: "center"
  },
  subtitle: {
    color: "#a7b0c0",
    marginBottom: 24
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    textAlign: "center",
    backgroundColor: "#3a7afe",
    color: "#ffffff",
    borderRadius: 8,
    fontWeight: "600"
  }
});
