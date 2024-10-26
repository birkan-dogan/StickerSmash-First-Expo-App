import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
          paddingBottom: 6,
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={25}
            />
          ),
          // this removes the back button
          headerLeft: () => <></>,
        }}
      />

      <Tabs.Screen
        name="Contact"
        options={{
          headerTitle: "Contact",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tabs>
  );
}
