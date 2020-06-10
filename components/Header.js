import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'SHOPPING LIST',
};
const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#351F65',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    paddingTop: 25,
    textAlign: 'center',
  },
});

export default Header;
