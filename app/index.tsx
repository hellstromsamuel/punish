import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Text, View, useThemeColor } from "../components/Themed";

export default function HomeScreen() {
  const cardColor = useThemeColor({}, "card");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Link href="/fines" asChild>
          <TouchableOpacity
            style={{ ...styles.link, backgroundColor: cardColor }}
          >
            <Text>Bøter</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/members" asChild>
          <TouchableOpacity
            style={{ ...styles.link, backgroundColor: cardColor }}
          >
            <Text>Lag</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  link: {
    borderRadius: 20,
    borderCurve: "continuous",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
