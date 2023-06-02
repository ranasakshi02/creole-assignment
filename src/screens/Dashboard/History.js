import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const History = () => {
  const historyData = [
    { id: 1, title: 'Payment', date: 'June 1, 2023' },
    { id: 2, title: 'Order', date: 'May 28, 2023' },
    { id: 3, title: 'Delivery', date: 'May 25, 2023' },
    { id: 4, title: 'Payment', date: 'May 22, 2023' },
    { id: 5, title: 'Order', date: 'May 18, 2023' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.historyItem}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyList: {
    flexGrow: 1,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
});

export default History;
