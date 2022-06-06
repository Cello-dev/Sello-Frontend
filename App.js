import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Login from "./screens/login_reg/login";
import Register from './screens/login_reg/register';

export default function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const Stack = createNativeStackNavigator();

    if(!isLoggedIn){
      return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ title: '' }}
                />
                <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{ title: '' }}
                />
              </Stack.Navigator>
            </NavigationContainer>  
          </View>
        </TouchableWithoutFeedback>
      );
    }
    else if (isLoggedIn) {
      // bring user directly to their account dashboard
    }
}
// Removed alignItems: "center" because it interferes with rendering of the Stack.container.
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
  }
});
