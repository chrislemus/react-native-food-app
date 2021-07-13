import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Business Search' }}/>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Business Details' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;