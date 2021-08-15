import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MainButton from '../components/MainButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderButton from '../components/HeaderButton';
import ResultsGridTile from '../components/ResultsGridTile';
import Http from '../services/Http';

const Results = (props) => {
  const [loading, setLoading] = useState(false);
  const [lotData, setLotData] = useState(false);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const asyncFunctionData = async () => {
  //     try {
  //       const storageData = await AsyncStorage.getItem('user');
  //       setData(JSON.parse(storageData));
  //     } catch (e) {}
  //   };
  //   asyncFunctionData();
  // }, [setData]);

  const getList = async () => {
    // setLoading(true);
    // const id = route.params.id;
    const data = await Http.send('GET', `/api/becks/1`);
    if (data) {
      const body = data.body;
      await setData(body);
      console.log(data);
    }

    // if (!data) {
    //   Alert.alert('Fatal Error', 'No data from server..');
    // } else {
    //   switch (data.typeResponse) {
    //     case 'Success':
    //       const body = data.body;
    //       await setData([body]);
    //       const dt = data[0];
    //       await setLotData(dt);
    //       console.log(lotData);
    //       break;

    //     case 'Fail':
    //       data.body.errors.forEach((element) => {});
    //       break;

    //     default:
    //       Alert.alert(data.typeResponse, data.message);
    //       break;
    //   }
    // }

    // setLoading(false);

    // return res;
  };

  useEffect(() => {
    getList();
  }, []);

  const renderGridItem = (itemData) => {
    return (
      <ResultsGridTile
        id={itemData.item.id}
        score={itemData.item.total_score}
        date={itemData.item.test_date}
        // onSelect={() => {
        //   props.navigation.navigate({
        //     routeName: 'Establishments',
        //     params: {
        //       establishmentId: itemData.item.id,
        //       establishmentName: itemData.item.name,
        //       establishmentBudget: itemData.item.budget,
        //       establishmentDirection: itemData.item.direction,
        //       establishmentDescription: itemData.item.description,
        //       establishmentImageURL: itemData.item.imageurl,
        //     },
        //   });
        // }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/aware-bg-2.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <FlatList
          style={{ marginTop: 70 }}
          data={data}
          keyExtractor={(item) => JSON.stringify(item.id)}
          renderItem={renderGridItem}
        />
      </ImageBackground>
    </View>

    // <View style={{ padding: 10 }}>
    //   <View>
    //     <Text style={{ fontSize: 20, textAlign: 'center' }}>mano</Text>
    //   </View>

    // </View>
  );
};

Results.navigationOptions = (navData) => {
  return {
    headerTitle: 'Resultados',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="exit"
          iconName="exit"
          onPress={() => {
            navData.navigation.replace('Login');
          }}
        />
      </HeaderButtons>
    ),
    // headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  logoContainer: {
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    alignItems: 'center',

    justifyContent: 'center',

    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  awareImage: {
    width: 180,
    height: 40,
    resizeMode: 'contain',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(204, 204, 204, 0.78)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
  },
  textInput: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
  },
  signUp: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSignUp: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Results;
