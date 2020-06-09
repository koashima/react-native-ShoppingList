import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Honey'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Beer'},
  ])

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return ( 
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

});

export default App;