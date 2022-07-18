# React Native Sample Ecommerce App

## Dependencies when setting up a new project
# Please consult https://reactnavigation.org/docs/ for the latest documentation
1. @react-navigation/native
2. react-native-screens 
3. react-native-safe-area-context
4. cd ios && pod install && cd ..
5. @react-navigation/drawer
6. react-native-gesture-handler react-native-reanimated
7. Add import 'react-native-gesture-handler'; to either your app or index.js. It should be the first line
8. Change your babel.config.js to
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
9. In your metro.config.js change `inlineRequires` from true to false