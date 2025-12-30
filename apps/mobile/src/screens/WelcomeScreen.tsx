import { Pressable, StyleSheet, Text, View } from "react-native";

type WelcomeScreenProps = {
  onBack: () => void;
};

export default function WelcomeScreen({ onBack }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao RPG Tormenta</Text>
      <Text style={styles.subtitle}>Sua jornada comeca aqui.</Text>
      <Pressable style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
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
    alignItems: "center",
    backgroundColor: "#3a7afe",
    borderRadius: 8
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600"
  }
});
