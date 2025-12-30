import { Pressable, StyleSheet, Text, View } from "react-native";

type LoginScreenProps = {
  onSubmit: () => void;
};

export default function LoginScreen({ onSubmit }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.label}>Email</Text>
      <View style={styles.input} />
      <Text style={styles.label}>Senha</Text>
      <View style={styles.input} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Pressable>
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
    alignItems: "center",
    backgroundColor: "#3a7afe",
    borderRadius: 8
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600"
  }
});
