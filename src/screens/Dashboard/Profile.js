import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imgPath from '../../../assets/imgPath';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={imgPath.user2}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe1</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>johndoe1@example.com</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+91 9999999999</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Gujart,Ahmedabad</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: '#777',
  },
});

export default Profile;
