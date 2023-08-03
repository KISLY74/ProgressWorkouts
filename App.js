import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen/MainScreen';
import StatisticScreen from "./screens/StatisticScreen/StatisticScreen"
import EditScreen from "./screens/EditScreen/EditScreen"

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
  animation: 'none'
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} options={config} />
        <Stack.Screen name="StatisticScreen" component={StatisticScreen} options={config} />
        <Stack.Screen name="EditScreen" component={EditScreen} options={config} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
