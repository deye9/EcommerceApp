import {StyleSheet, StatusBar} from 'react-native';
import {themes, Colors} from './themes';

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

  sideMenuContainer: {
    width: '100%',
    height: '100%',
    color: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: themes.active.Success,
  },
  profileHeader: {
    flexDirection: 'row',
    // backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  profileHeaderLine: {
    height: 1,
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
  },

  statusBar: {
    height: 80,
    backgroundColor: themes.active.Success,
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
  alignRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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

  // Accordion
  row: {
    height: 35,
    paddingLeft: 15,
    paddingRight: 18,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: Colors.CGRAY,
    justifyContent: 'space-between',
  },
  parentHr: {
    height: 1,
    width: '100%',
    color: Colors.WHITE,
  },
  childRow: {
    flexDirection: 'row',
    backgroundColor: Colors.GRAY,
    justifyContent: 'space-between',
  },
  button: {
    height: 35,
    fontSize: 12,
    width: '100%',
    paddingLeft: 35,
    paddingRight: 35,
    alignItems: 'center',
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
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
