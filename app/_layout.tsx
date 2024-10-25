import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            // headerTitle: "StickerSmash",
            headerShown: false,
            // this removes the back button
            headerLeft: () => <></>,
          }}
        />

        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
