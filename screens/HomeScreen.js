import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import styles from '../StyleSheets/commonStyles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[styles.sectionContainer, {justifyContent: 'center'}]}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://miro.medium.com/max/1200/1*adWGbH24epVnz_KIQ5dD-A.png',
          }}
        />
        <Text style={styles.textHeading}>Firebase Cloud Messaging</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.props.navigation.navigate('Auth')}>
          <View style={styles.button}>
            <Text style={styles.text}>Firebase Authentication</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
