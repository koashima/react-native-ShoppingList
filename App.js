import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Honey'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Beer'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    !text
      ? Alert.alert('Error', 'Please enter an item', {text: 'OK'})
      : setItems((prevItems) => {
          return [{id: uuid(), text}, ...prevItems];
        });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#E5E7E9'
  },
});

export default App;
