import {MoviesScreen, MovieDetailsScreen} from '../screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {Colors} from '../constants';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.ACCENT,
  },
  headerShown: false,
  headerTintColor: Colors.PRIMARY,
};
export type RootStackParams = {
  Movies: undefined;
  MovieDetails: {
    id: string;
  };
};

const MovieStack = createNativeStackNavigator<RootStackParams>();
const MovieStackScreens = () => {
  return (
    <MovieStack.Navigator screenOptions={defaultNavOptions}>
      <MovieStack.Screen name="Movies" component={MoviesScreen} />
      <MovieStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MovieStack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MovieStackScreens />
    </NavigationContainer>
  );
};
export default AppNavigator;
