import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'
import Kanji3 from '../util/jlpt3.json'
import Kanji2 from '../util/jlpt2.json'
import Kanji1 from '../util/jlpt1.json'

function TemplateKanji({ navigation: { navigate }, route }) {
  const { paramsData } = route.params

  const [arr, setArr] = useState()

  useEffect(() => {
    switch (paramsData) {
      case 5:
        console.log(paramsData === 5)
        setArr(Kanji5)
        break
      case 4:
        setArr(Kanji4)
        break
      case 3:
        setArr(Kanji3)
        break
      case 2:
        setArr(Kanji2)
        break
      case 1:
        setArr(Kanji1)
        break
      default:
        setArr(Kanji5)
        break
    }
  }, [])

  return (
    <FlatList
      data={arr}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigate('KanjiDetail', { paramsData: item })}>
          <Text style={styles.kanjiText}>{item.kanjiName}</Text>
        </TouchableOpacity>
      )}
      numColumns={5}
      style={styles.flatList} // background color of the FlatList
      contentContainerStyle={styles.flatListContent} // background color of the content
    />
  )
}

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    width: '100%' // Take up the full width of the FlatList
  },
  sectionHeader: {
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  // background color of the content
  flatListContent: {
    backgroundColor: 'white'
  },
  // background color of the FlatList
  flatList: {
    backgroundColor: 'white'
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
    margin: wp('1%'),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: wp('3%')
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})

export default TemplateKanji
