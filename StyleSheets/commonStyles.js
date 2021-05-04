import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  button: {
    backgroundColor: '#1B788C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
  },
  buttonLogOut: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textSignOut: {
    color: '#1B788C',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2,
  },
  tinyLogo: {
    width: 180,
    height: 60,
    alignSelf: 'center',
    marginBottom: 50,
  },
  textInput: {
    height: 50,
    borderColor: '#1B788C',
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 10,
    letterSpacing: 2,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    fontSize: 16,
    letterSpacing: 3,
  },
  textHeading: {
    textAlign: 'center',
    color: '#1B788C',
    fontWeight: 'bold',
    padding: 15,
    fontSize: 22,
    letterSpacing: 2,
  },
});

export default styles;
