import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import route from '../routes/route';
import {styles} from '../assets/AppStyles';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegistrationScreen from '../screens/Auth/RegistrationScreen';

// import Categories from '../screens/Categories';
// import Ingredients from '../screens/Ingredients';
// import SearchScreen from '../screens/SearchScreen';
// import RecipeScreen from '../screens/RecipeScreen';
// import RecipeDetails from '../screens/RecipeDetails';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import IngredientsScreen from '../screens/IngredientsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={styles.headerTitleStyle}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={route.HOME_PATH}
        component={HomeScreen}
        options={{title: route.HOME}}
      />
      <Stack.Screen
        name={route.LOGIN_PATH}
        component={LoginScreen}
        options={{title: route.LOGIN}}
      />
      <Stack.Screen
        name={route.REGISTER_PATH}
        component={RegistrationScreen}
        options={{title: route.REGISTER}}
      />
      {/* <Stack.Screen
        name={route.RECIPESCREEN}
        component={RecipeScreen}
        options={{title: 'Recipes'}}
      />
      <Stack.Screen
        name="ingredients_screen"
        component={IngredientsScreen}
        options={{title: 'Ingredients'}}
      />
      <Stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{title: 'Categories'}}
      />

      <Stack.Screen
        name="recipe_details"
        component={RecipeDetails}
        options={{title: 'Recipe Details'}}
      />
      <Stack.Screen
        name="ingredients"
        component={Ingredients}
        options={{title: 'Recipe Ingredients'}}
      />
      <Stack.Screen
        name="category_details"
        component={Categories}
        options={{title: 'Recipes In Category'}}
      />
      <Stack.Screen
        name="search_screen"
        component={SearchScreen}
        options={{title: 'Search'}}
      /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
