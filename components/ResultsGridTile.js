import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import moment from 'moment';

const ResultsGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: 'white', justifyContent: 'center' },
        }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}
          >
            Inventario de Beck
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Text style={styles.title}>Puntaje: {props.score}</Text>
          <Text style={styles.title}>
            <Ionicons name="calendar" size={20} color="black" /> {''}
            {moment(props.date).format('MM-DD-YYYY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
  },
  title: {
    fontSize: 15,
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ResultsGridTile;
