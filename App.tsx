import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  LogBox,
} from 'react-native';
import Card from './src/Card';
import ImpCard from './src/ImpCard';
import Moment from 'react-moment';
import moment from 'moment';

LogBox.ignoreAllLogs();

const App = () => {
  let dt = moment(new Date());
  let dateFormat = dt.format('LL');

  let arrData = [
    {
      id: 1,
      bgColorName: 'red',
      title: 'Health',
      uri: 'https://img.icons8.com/external-others-pike-picture/50/000000/external-Capsule-pharma-others-pike-picture.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 2,
      bgColorName: '#4649FF',
      title: 'Work',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 3,
      bgColorName: 'green',
      title: 'Private',
      uri: 'https://img.icons8.com/flat-round/64/000000/lock-file.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 4,
      bgColorName: '#90C8AC',
      title: 'Travel World',
      uri: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-plane-farm-flaticons-lineal-color-flat-icons-2.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 5,
      bgColorName: 'orange',
      title: 'Just for me',
      uri: 'https://img.icons8.com/flat-round/64/000000/lock-file.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 6,
      bgColorName: '#B958A5',
      title: 'This is a quite long goal to fit',
      // uri: 'https://img.icons8.com/external-others-pike-picture/50/000000/external-Capsule-pharma-others-pike-picture.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 7,
      bgColorName: '#7978FF',
      title: 'Studyng',
      uri: 'https://img.icons8.com/color/48/000000/books.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 8,
      bgColorName: 'brown',
      title: 'Nothing',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 9,
      bgColorName: '#7858A6',
      title: 'Sleeping',
      uri: "require('https://img.icons8.com/external-others-pike-picture/50/000000/external-Capsule-pharma-others-pike-picture.png')",
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
    {
      id: 10,
      bgColorName: '#00AFC1',
      title: 'Movie',
      uri: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-movie-cinema-kiranshastry-lineal-color-kiranshastry-2.png',
      pinUri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png',
      dt: dateFormat,
    },
  ];

  const [nomralNotes, setNormalNotes] = useState();

  const [impNotes, setImpNotes] = useState([]);

  function returnVal(e: string) {
    let tempArr = [];

    nomralNotes?.map(element => {
      if (element.id.toString() !== e) {
        tempArr.push(element);
      }
      if (element.id.toString() === e) {
        // setImpNotes(impNotes => [...impNotes, element]);
        setImpNotes(current => [...current, element]);
      }
    });

    setNormalNotes(tempArr);
  }

  useEffect(() => {
    setNormalNotes(arrData);
  }, []);
  console.log('impNotes', impNotes);

  return (
    <SafeAreaView style={styles.container}>
      {impNotes.length > 0 && (
        <>
          <Text style={styles.header}>Important Notes</Text>
          <FlatList
            numColumns={2}
            key={'#'}
            keyExtractor={item => '#' + item.id}
            data={impNotes}
            renderItem={element => (
              <ImpCard items={element} len={impNotes?.length} />
            )}></FlatList>
        </>
      )}

      {nomralNotes && nomralNotes.length > 0 && (
        <Text style={styles.header}>Normal Notes</Text>
      )}
      {/* Scrill */}
      <FlatList
        numColumns={2}
        key={'#'}
        keyExtractor={item => '#' + item.id}
        data={nomralNotes}
        renderItem={element => (
          <Card
            items={element}
            len={nomralNotes?.length}
            returnValue={returnVal}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'darkblue',
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
