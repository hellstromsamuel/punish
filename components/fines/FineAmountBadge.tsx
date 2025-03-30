import { StyleSheet, Text } from "react-native";

export default function FineAmountBadge({ amount }: { amount: number }) {
  return (
    <Text
      style={{
        ...styles.itemAmount,
        backgroundColor:
          amount > 0 ? colors.red.background : colors.green.background,
        color: amount > 0 ? colors.red.text : colors.green.text,
      }}
    >
      {amount}
    </Text>
  );
}

const colors = {
  red: {
    background: "rgba(255,0,0,0.10)",
    text: "rgba(255,0,0,1.0)",
  },
  green: {
    background: "rgba(0,255,0,0.10)",
    text: "rgba(0,255,0,1.0)",
  },
};

const styles = StyleSheet.create({
  itemAmount: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
    borderRadius: 4,
  },
});
