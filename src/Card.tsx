import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const Card = ({items, len, returnValue}) => {
  function ValReturn(e: string) {
    returnValue(e);
  }
  return (
    <View
      style={[styles.cardContainer, {backgroundColor: items.item.bgColorName}]}
      key={items.item.id}>
      {items.item.hasOwnProperty('uri') ? (
        <>
          <Image
            style={{width: '30%', height: '30%'}}
            source={{
              uri: items.item.uri,
            }}
          />
        </>
      ) : (
        <View style={{width: '40%', height: '40%'}}></View>
      )}

      <TouchableOpacity
        onPress={() => ValReturn(items.item.id.toString())}
        style={styles.pin}>
        <Image
          style={{width: '20%', height: '20%'}}
          source={{
            uri: items.item.pinUri,
          }}
        />
      </TouchableOpacity>

      <Text style={[styles.txt, {fontSize: 20, paddingBottom: 8}]}>
        {items.item.title}
      </Text>
      <Text style={styles.txt}>{items.item.dt}</Text>

      <Text style={[styles.txt, {position: 'absolute', bottom: 10, left: 30}]}>
        {items.index + 1} of {len}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 12,
    marginVertical: 10,
    width: 170,
    height: 180,
    position: 'relative',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pin: {
    width: 25,
    height: 100,
    position: 'absolute',
    right: 0,
    top: 20,
  },
  txt: {
    color: 'white',
  },
});
function stingify(arg0: number): string {
  throw new Error('Function not implemented.');
}
