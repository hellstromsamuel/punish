import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import useSearchFines from "../hooks/fines/useSearchFines";
import FinesList from "../components/fines/FinesList";

export default function FinesScreen() {
  const { filteredFines } = useSearchFines();

  return (
    <SafeAreaView style={styles.container}>
      <FinesList fines={filteredFines} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
