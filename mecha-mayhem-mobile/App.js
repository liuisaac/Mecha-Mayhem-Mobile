import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useAnimatedValue } from 'react-native';
import { Stack, useRouter } from 'expo-router';
export default function App() {
  const router = useRouter();
  return (
    <View className='flex-1 justify-center items-center bg-red-500'>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}