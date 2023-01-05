import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './style';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [childerens, setChilderens] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults </Text>
          <Text style={{color: '#8d8d8d'}}>Age 13 or above </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Childerens </Text>
          <Text style={{color: '#8d8d8d'}}>Age2-12 </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setChilderens(Math.max(0, childerens - 1))}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{childerens}</Text>
          <Pressable
            onPress={() => setChilderens(childerens + 1)}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants </Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={{fontSize: 22, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      </View>
      
    </View>
  );
};
export default GuestsScreen;
