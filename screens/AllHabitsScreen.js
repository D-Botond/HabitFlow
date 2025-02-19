import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AllHabitsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AllHabitsScreen</Text>
      <Button title="Add Habit" onPress={() => navigation.navigate('Add Habit')} />
      <Button title="Edit Habit" onPress={() => navigation.navigate('Edit Habit')} />
    </View>
  );
}