import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => {
    setText(textValue);
  };

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="ADD ITEM..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          {''}
          <Icon name="plus" size={20} />
          ADD ITEM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#B17ACC',
    padding: 9,
    margin: 5,
    borderRadius: 25,
  },
  btnText: {
    color: '#351F65',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
