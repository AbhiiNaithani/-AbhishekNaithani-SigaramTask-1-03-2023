import { FlatList, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;

const boxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

export default function App() {
  const [redList, setRedList] = useState([])

  function MatrixHandler(box) {
    const tempList = [...redList];
    console.log('vhbj', redList.length);
    if (redList.length < 2) {
      setRedList((arr) => [...arr, box]);

    } else {
      tempList.splice(0, 1)
      tempList.push(box)
      setRedList(tempList);
    }

    console.log('cvgb', tempList);

    console.log(redList);
  }
  return (
    <SafeAreaView style={styles.rootcontainer}>
      <Text style={styles.text}>
        {`MATRIX GAME`}
      </Text>
      <View style={styles.matrixContainer}>
        <FlatList
          numColumns={4}
          data={boxes}
          renderItem={({ item }) => {
            const isActive = redList.includes(item);
            return (
              <TouchableOpacity onPress={() => {
                if (!redList.includes(item)) {
                  MatrixHandler(item)
                }
              }} key={item} style={[styles.matrix, { backgroundColor: isActive ? 'red' : 'blue' }]}></TouchableOpacity>
            )
          }}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  matrixContainer: {

    width: wp,
    height: hp * 0.34,
    backgroundColor: 'black',
    paddingTop: hp * 0.004,
    paddingHorizontal: wp * 0.004

  },
  matrix: {

    backgroundColor: 'blue',
    width: wp * 0.24,
    height: hp * 0.08,
    marginHorizontal: wp * 0.004,
    marginBottom: hp * 0.004



  },
  text: {
    fontSize: wp * 0.1,
    color: 'red',
    textDecorationLine: 'underline',
    marginBottom: hp * 0.02
  }
})