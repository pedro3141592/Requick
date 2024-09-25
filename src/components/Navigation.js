import { StyleSheet, Text, View } from 'react-native';
import Cadastro, {Map} from './Map';
import {Home} from './Home'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const {Navigator, Screen} = createBottomTabNavigator();

export  function Navigation(){
    return(
        <NavigationContainer>
            <StatusBar/>
            <Navigator
            initialRouteName='Map'
            screenOptions={{
              headerShown: false,
              tabBarStyle: styles.tabBar,
              tabBarLabelStyle: styles.tabBarLabel,
              tabBarActiveTintColor: '#F7931E',
              tabBarInactiveTintColor: '#B0B0B0',
              tabBarIconStyle: styles.tabBarIcon,
            }}
            >
                 <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
          }}
        />
            <Screen
            name="Log-In"
            component={Cadastro}
            options={{
                tabBarIcon: ({size,color}) => <Feather name="log-in" size={size} color={color} />
            }}
            
            />

            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: '#FFFFFF', // Cor de fundo da barra de navegação
      borderTopWidth: 0, // Remove a borda superior
      elevation: 10, // Sombra para dar profundidade
      height: 50, // Diminuiu a altura da barra de navegação
    },
    tabBarLabel: {
      fontSize: 12, // Tamanho da fonte do rótulo
      marginBottom: 3, // Espaçamento abaixo do rótulo
    },
    tabBarIcon: {
      marginTop: 2, // Espaçamento acima do ícone
    },
  });
  