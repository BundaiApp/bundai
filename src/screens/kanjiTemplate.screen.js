import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import StrokesKanji from '../util/strokesAll.json'
import JlptKanji from '../util/jlptAll.json'

function TemplateKanji({ navigation: { navigate }, route }) {
  const { jlptLevel, strokes } = route.params

  const [arr, setArr] = useState([])

  useEffect(() => {
    if (!jlptLevel) {
      setArr(StrokesKanji[strokes])
    } else {
      setArr(JlptKanji[jlptLevel])
    }
  }, [jlptLevel, strokes])

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
  container: {
    flex: 1
  },
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
    backgroundColor: 'white',
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
    margin: wp('1%'),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'khaki',
    borderRadius: wp('3%')
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})

export default TemplateKanji
