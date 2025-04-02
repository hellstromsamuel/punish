import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { Appearance, useColorScheme } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    Appearance.setColorScheme("dark");
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Hjem", headerLargeTitle: true }}
        />
        <Stack.Screen
          name="fines"
          options={{
            title: "Bøter",
          }}
        />
        <Stack.Screen
          name="members"
          options={{
            title: "Gruppe",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
