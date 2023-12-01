import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function HomeScreen() {
  return (
    <View style={styles.main}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.main}>
      <Text>Settings content goes here...</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.main}>
      <Text>Profile content goes here...</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  const iconMap = {
    Home: "home",
    Settings: "cog",
    Profile: "user",
  };
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTopWidth: 0,
        height: 70,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              padding: 10,
              borderRightWidth: index < state.routes.length - 1 ? 1 : 0,
              borderColor: "#ddd",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5
              name={iconMap[label]}
              size={20}
              color={isFocused ? "#000" : "#666"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Chu!</Text>
      </View>
      <NavigationContainer independent={true}>
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    backgroundColor: "#005a9e",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#333",
    justifyContent: "space-around",
    paddingVertical: 14,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navText: {
    color: "#fff",
  },
  main: {
    flex: 1,
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    height: 1500,
  },
  footer: {
    backgroundColor: "#333",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});
