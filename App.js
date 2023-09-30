import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SegundaTela from "./SegundaTela";
import Invite from "./invite";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Oculta o cabeçalho
        />
        <Stack.Screen
          name="SegundaTela"
          component={SegundaTela}
          options={{ headerShown: false }} // Oculta o cabeçalho
        />
      <Stack.Screen
          name="Invite"
          component={Invite}
          options={{ headerShown: false }} // Oculta o cabeçalho
        />        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
