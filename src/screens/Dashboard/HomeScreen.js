import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, StatusBar } from 'react-native';
import imgPath from '../../../assets/imgPath';

const HomeScreen = () => {
  const users = [
    { id: 1, name: 'John Doe', image: imgPath.user1},
    { id: 2, name: 'Jane Smith', image:imgPath.user2 },
    { id: 3, name: 'Michael Johnson', image: imgPath.user1 },
    { id: 4, name: 'Emily Davis', image: imgPath.user2 },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.userContainer}>
        <Image source={item.image} style={styles.userImage} />
        <Text style={styles.userName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
     <StatusBar backgroundColor={"#038B12"} barStyle={'light-content'} />
     <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
});

export default HomeScreen;
