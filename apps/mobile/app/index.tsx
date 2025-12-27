import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.label}>Email</Text>
      <View style={styles.input} />
      <Text style={styles.label}>Senha</Text>
      <View style={styles.input} />
      <Link style={styles.button} href="/welcome">
        Acessar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#0f1115"
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    color: "#f5f7ff",
    fontWeight: "700"
  },
  label: {
    color: "#a7b0c0",
    marginBottom: 8
  },
  input: {
    height: 44,
    borderRadius: 8,
    backgroundColor: "#1a1d24",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2a2f3a"
  },
  button: {
    marginTop: 8,
    paddingVertical: 12,
    textAlign: "center",
    backgroundColor: "#3a7afe",
    color: "#ffffff",
    borderRadius: 8,
    fontWeight: "600"
  }
});
