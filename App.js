import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AllHabitsScreen from './screens/AllHabitsScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='All Habits' component={AllHabitsScreen} />
        <Stack.Screen name='Add Habit' component={AddScreen} />
        <Stack.Screen name='Edit Habit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
