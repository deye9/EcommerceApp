import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const routes = {
  HOME: 'Home',
  HOME_PATH: 'home_screen',
  LOGIN: 'Login',
  LOGIN_PATH: 'login_screen',
  REGISTER: 'Register',
  REGISTER_PATH: 'registration_screen',


  Accordion: [
    {
      title: 'Non Veg Biryanis',
      children: [
        {
          title: 'Chicken Biryani',
          value: false,
          showAtBottom: true,
          showInDrawer: true,
          // icon: focused => (
          //   <Icon name="Home" size={30} color={focused ? '#551E18' : '#000'} />
          // ),
        },
        {title: 'Mutton Biryani', value: false},
        {title: 'Prawns Biryani', value: false},
      ],
    },
    {
      title: 'Pizzas',
      children: [
        {title: 'Chicken Dominator', value: false},
        {title: 'Peri Peri Chicken', value: false},
        {title: 'Indie Tandoori Paneer', value: false},
        {title: 'Veg Extraveganza', value: false},
      ],
    },
    {
      title: 'Drinks',
      children: [
        {title: 'Cocktail', value: false},
        {title: 'Mocktail', value: false},
        {title: 'Lemon Soda', value: false},
        {title: 'Orange Soda', value: false},
      ],
    },
    {
      title: 'Deserts',
      children: [
        {title: 'Choco Lava Cake', value: false},
        {title: 'Gulabjamun', value: false},
        {title: 'Kalajamun', value: false},
        {title: 'Jalebi', value: false},
      ],
    },
  ],
};

export default routes;
