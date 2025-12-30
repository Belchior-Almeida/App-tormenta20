import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      {loggedIn ? (
        <WelcomeScreen onBack={() => setLoggedIn(false)} />
      ) : (
        <LoginScreen onSubmit={() => setLoggedIn(true)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f1115"
  }
});
