import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MembersList from "../components/members/MembersLIst";
import useSearchMembers from "../hooks/members/useSearchMembers";

export default function MembersScreen() {
  const { filteredMembers } = useSearchMembers();
  return (
    <SafeAreaView style={styles.container}>
      <MembersList members={filteredMembers} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
