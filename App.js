import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Navigation} from './src/components/Navigation';
export default function App() {
  return (
  
      <Navigation/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});