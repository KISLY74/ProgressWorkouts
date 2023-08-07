import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen/MainScreen';
import StatisticScreen from "./screens/StatisticScreen/StatisticScreen"
import EditScreen from "./screens/EditScreen/EditScreen"
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import exercises from './config/exercises';
import DataStore from "./store/DataStore"
import { Context } from './screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();

const config = {
  headerStyle: {
    backgroundColor: '#212224',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackVisible: false,
  headerShown: false,
  animation: 'none',
  // orientation: 'all'
}

export default function App() {

  useEffect(() => {
    (async function () {
      await AsyncStorage.getItem('initExercises')
        .then(async (data) => !data && await AsyncStorage.setItem('initExercises', JSON.stringify(exercises)))
    }())
  }, [])

  return (
    <Context.Provider value={{
      data: new DataStore()
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} options={config} />
          <Stack.Screen name="StatisticScreen" component={StatisticScreen} options={config} />
          <Stack.Screen name="EditScreen" component={EditScreen} options={config} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
