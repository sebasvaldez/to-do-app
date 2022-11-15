import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  containerEnd: {
    flex: 1,
    margin: 'auto',
    justifyContent: 'flex-end',
    backgroundColor: '#EDEDEE',
  },
  button: {
    backgroundColor: '#50C2C9',
    width: '85%',
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 75,
    textAlign: 'center',
  },

  loginText: {
    color: '#50C2C9',
    fontSize: 15,
    fontWeight: 'bold',
  },

  elipse: {
    position: 'absolute',
    top: -100,
    left: '-24%',
  },

  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    marginBottom: 15,
    paddingLeft: 40,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    width: '90%',
  },

  inputGroup: {
    width: '95%',
    alignItems: 'center',
  },

  imgTitle: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  textDescription: {
    color: 'dark-grey',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainOnboarding: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: '80%',
    paddingBottom: 60,
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    color: 'black',
    fontSize: 20,
    marginBottom: 15,
  },
  containerTextLink: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
});
