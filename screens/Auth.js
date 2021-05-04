import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../StyleSheets/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  SignOut = () => {
    alert('log-out');
  };

  SignIn = () => {
    alert('log-in');
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="chevron-back-outline" size={40} color={'#1B788C'} />
        </TouchableOpacity>
        <View style={[styles.sectionContainer, {justifyContent: 'center'}]}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://miro.medium.com/max/1200/1*adWGbH24epVnz_KIQ5dD-A.png',
            }}
          />
          <Text style={styles.textHeading}>Authentication</Text>
          <TextInput
            placeholder="Type Email Address"
            placeholderTextColor={'#000'}
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            placeholder="Type Password"
            placeholderTextColor={'#000'}
            autoCompleteType="password"
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <TouchableOpacity activeOpacity={0.7} onPress={() => this.SignIn}>
            <View style={styles.button}>
              <Text style={styles.text}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonLogOut}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.SignOut}>
              <Text style={styles.textSignOut}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Auth;
