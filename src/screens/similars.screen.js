import React from 'react'
import { SafeAreaView, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import SIMILAR_DATA from '../util/similar.json'

export default function SimilarScreen({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.keys(SIMILAR_DATA)}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item}
            style={styles.block}
            onPress={() => navigate('SimilarDetail', { kanji: item })}>
            <Text style={styles.kanjiText}>{item}</Text>
          </TouchableOpacity>
        )}
        numColumns={5}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '2%',
    backgroundColor: 'ivory'
    //backgroundColor: '#C4C4B0'
  },
  // background color of the content
  flatListContent: {
    backgroundColor: 'ivory'
    //backgroundColor: '#C4C4B0'
  },
  // background color of the FlatList
  flatList: {
    backgroundColor: 'ivory',
    //backgroundColor: '#C4C4B0',
    paddingHorizontal: '3%'
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  separator: {
    height: hp('1%')
  },
  block: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})
