import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// initial food items data with expiration dates (before making it functional)
// this is just to show the home screen as part of the second checkpt
const HomeScreen = () => {
  const [foodItems] = useState([
    {name: 'Milk', expiration: '3 Days' },
    {name: 'Bananas', expiration: '5 Days'},
    {name: 'Bread', expiration: '5 Days' },
    { name: 'Strawberries', expiration: '1 Week' },
  ]);

  return (

    <SafeAreaView style={styles.container}>
      // header section with two columns (food items and expiration)
      <View style={styles.header}>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Food Items:</Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Expiration:</Text>
        </View>
      </View>

      // scrollable list of food items
      <ScrollView style={styles.scrollView}>
        {foodItems.map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.foodText}>{item.name}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.expirationText}>{item.expiration}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      // footer buttons for adding items and viewing recipes (will be implemented later)
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Add Food Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Recipes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1a237e',
    padding: 15,
  },
  headerColumn: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  column: {
    flex: 1,
    padding: 15,
  },
  foodText: {
    fontSize: 18,
    color: '#000',
  },
  expirationText: {
    fontSize: 18,
    color: '#000',
  },
  footer: {
    padding: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HomeScreen; 