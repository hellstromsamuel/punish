import { SectionList, StyleSheet } from "react-native";
import { IMember } from "../../interfaces/IMember";
import { Text, View, useThemeColor } from "../Themed";
import FineAmountBadge from "../fines/FineAmountBadge";

export default function MembersList({
  members,
}: {
  members: { title: string; data: IMember[] }[];
}) {
  const cardColor = useThemeColor({}, "card");

  return (
    <SectionList
      sections={members}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name.first}</Text>
          <FineAmountBadge amount={item.amount} />
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={{ ...styles.sectionHeader, backgroundColor: cardColor }}>
          {section.title}
        </Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    height: 44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
});
