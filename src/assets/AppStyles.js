import {StyleSheet, StatusBar} from 'react-native';
import {themes} from './themes';

export const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
  },
  drawerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  headerTitleStyle: {
    flex: 1,
    fontweight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: themes.active.Primary,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  logo: {
    width: '50%',
    height: 100,
    margin: 30,
    resizeMode: 'contain',
  },
  centralize: {
    textAlign: 'center',
    alignItems: 'center',
  },
  // Loader Styles
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  // Other styles
  inputStyle: {
    margin: 12,
    padding: 10,
    width: 250,
    height: 40,
    color: 'white',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: themes.active.Secondary,
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonTextStyle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonStyle: {
    backgroundColor: themes.active.Success,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },

  // Remove

  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
});
