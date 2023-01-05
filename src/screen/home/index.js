import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = Props => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        style={styles.image}
        source={require('../../../assest/image/wallpaper.jpg')}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
