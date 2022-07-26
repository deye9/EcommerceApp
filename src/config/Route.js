import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas, far);

const routes = {
  HOME: 'Home',
  HOME_PATH: 'home_screen',
  LOGIN: 'Login',
  LOGIN_PATH: 'login_screen',
  REGISTER: 'Register',
  REGISTER_PATH: 'registration_screen',

  Accordion: [
    {
      key: 1,
      title: 'Drinks',
      icon: ['fas', 'chevron-down'],
      children: [
        {title: 'Cocktail', value: false, icon: ['fas', 'user']},
        {title: 'Mocktail', value: false, icon: ['far', 'address-card']},
        {title: 'Lemon Soda', value: false},
        {title: 'Orange Soda', value: false},
      ],
    },
    {
      key: 2,
      title: 'Electronics',
      icon: ['fas', 'chevron-down'],
      children: [
        {title: 'Choco Lava Cake', value: false},
        {title: 'Gulabjamun', value: false},
        {title: 'Kalajamun', value: false},
        {title: 'Jalebi', value: false},
      ],
    },
    {
      key: 3,
      icon: ['fas', 'chevron-down'],
      title: 'Phones and Tablets',
      children: [
        {title: 'Chicken Dominator', value: false},
        {title: 'Peri Peri Chicken', value: false},
        {title: 'Indie Tandoori Paneer', value: false},
        {title: 'Veg Extraveganza', value: false},
      ],
    },
    {
      key: 4,
      icon: ['fas', 'chevron-down'],
      title: 'Computers and Accessories',
      children: [
        {
          title: 'Mac',
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
  ],
};

export default routes;
