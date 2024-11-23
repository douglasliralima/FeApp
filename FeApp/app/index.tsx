import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const RootLayout = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/home");
        }}
      >
        <Text>{t("GO_TO_TABS")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default RootLayout;
