import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import MainButton from '../components/MainButton';

import moment from 'moment';
import BeckCard from '../components/BeckCard';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const DetailedResult = (props) => {
  // const [loading, setLoading] = useState(false);
  const data = props.navigation.getParam('itemData');
  console.log(data.item.total_score);

  let showResult;

  const score = data.item.total_score;
  const numTotal = parseInt(score);

  if (numTotal === 0) {
    showResult = 'Felicitaciones si tu total es 0!';
  }

  if (numTotal >= 1 && numTotal <= 10) {
    showResult = 'Estos altibajos se consideran normales';
  }

  if (numTotal >= 11 && numTotal <= 16) {
    showResult = 'Alteración leve del estado de ánimo';
  }

  if (numTotal >= 17 && numTotal <= 20) {
    showResult = 'Depresión clínica leve';
  }

  if (numTotal >= 21 && numTotal <= 30) {
    showResult = 'Depresión moderada';
  }

  if (numTotal >= 31 && numTotal <= 40) {
    showResult = 'Depresión severa';
  }

  if (numTotal > 40) {
    showResult = 'Depresión extrema';
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/aware-bg-2.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <BeckCard
            style={{
              width: 380,
              height: 300,
              padding: 25,
            }}
          >
            <View style={{ justifyContent: 'flex-start', marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 25,
                  marginBottom: 20,
                  marginTop: 20,
                  fontWeight: '700',
                }}
              >
                Total: {data.item.total_score}
              </Text>
              <Text style={{ fontSize: 25, fontWeight: '300' }}>
                Esta prueba fue completada el:{' '}
                {moment(data.item.test_date).format('MM-DD-YYYY')}
              </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 25,
                  marginBottom: 5,
                  marginTop: 20,
                  fontWeight: '700',
                }}
              >
                Resultado:
              </Text>
              <Text
                style={{
                  fontSize: 25,

                  fontWeight: '500',
                }}
              >
                {showResult}
              </Text>
            </View>
          </BeckCard>
        </View>
      </ImageBackground>
    </View>
  );
};

DetailedResult.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => (
      <Text style={{ fontSize: 24 }}>Resultado Detallado</Text>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="chevron-back"
          iconName="chevron-back"
          onPress={() => {
            navigationData.navigation.navigate('Results');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logosContainer: {
    justifyContent: 'flex-start',
    direction: 'rtl',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    padding: 40,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    width: 260,
    height: 300,
    overflow: 'hidden',
  },
  contentContainer: {
    alignItems: 'center',

    justifyContent: 'center',

    overflow: 'hidden',
  },
});

//<Ionicons name="cart" size={24} color="black" />

export default DetailedResult;
