import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./UI/IconButton";
import ExpenseContextProvider from "./context/expense_context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const Expenses = () => (
  <BottomTab.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: "#FF5B22" },
      headerTintColor: "#FECDA6",
      tabBarStyle: { backgroundColor: "#FF5B22" },
      tabBarActiveTintColor: "#FECDA6",
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={30}
          color={tintColor}
          onPress={() => {
            navigation.navigate("ManageExpense");
          }}
        />
      ),
    })}
  >
    <BottomTab.Screen
      name="RecentExpenses"
      component={RecentExpenses}
      options={{
        title: "Recent Expenses",
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="AllExpenses"
      component={AllExpenses}
      options={{
        title: "All Expenses",
        tabBarLabel: "All",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" size={size} color={color} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#FF5B22" },
              headerTintColor: "#FECDA6",
            }}
          >
            <Stack.Screen
              name="Expenses"
              component={Expenses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
