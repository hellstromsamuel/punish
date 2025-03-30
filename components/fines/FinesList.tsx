import { SectionList, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import FineAmountBadge from "./FineAmountBadge";
import { IFine } from "../../interfaces/IFine";

export default function FinesList({
  fines,
}: {
  fines: { title: string; data: IFine[] }[];
}) {
  return (
    <SectionList
      sections={fines}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <FineAmountBadge amount={item.amount} />
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
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
