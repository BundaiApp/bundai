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

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'
import Kanji3 from '../util/jlpt3.json'
import Kanji2 from '../util/jlpt2.json'
import Kanji1 from '../util/jlpt1.json'
import Strokes from '../util/strokesAll.json'

const kanjiDataMap = {
  5: Kanji5,
  4: Kanji4,
  3: Kanji3,
  2: Kanji2,
  1: Kanji1
}

function TemplateKanji({ navigation: { navigate }, route }) {
  const { jlptLevel, strokes } = route.params

  const [arr, setArr] = useState([])

  useEffect(() => {
    const kanjiData = setArr(kanjiDataMap[jlptLevel] || Kanji5)
  }, [jlptLevel])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>
          {strokes ? `Kanjis with ${strokes} Strokes ` : `JLPT ${jlptLevel}`}
        </Text>
      </View>

      <FlatList
        data={strokes ? Strokes[strokes] : arr}
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
    </SafeAreaView>
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
