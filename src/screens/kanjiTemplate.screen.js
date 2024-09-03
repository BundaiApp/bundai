import React, { useEffect, useState } from 'react'
import { Platform, Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Verbs from '../util/verbs.json'
import Nouns from '../util/nouns.json'
import Adjectives from '../util/adj.json'
import Adverbs from '../util/adverbs.json'
import Katakana from '../util/katakana.json'
import Hiragana from '../util/hiragana.json'

import ProvideData from '../util/jlptArray'

function TemplateKanji({ navigation: { navigate }, route }) {
  const {
    jlptLevel,
    strokes,
    grades,
    isWord,
    nouns,
    verbs,
    adjectives,
    adverbs,
    katakana,
    hiragana
  } = route.params

  const [arr, setArr] = useState([])

  function navigateToDetailScreen(item, index) {
    navigate('KanjiDetail', {
      paramsData: item,
      wholeArr: arr,
      itemIndex: index,
      isWord,
      isKana: hiragana || katakana,
      title: item.kanjiName
    })
  }

  useEffect(() => {
    if (jlptLevel) setArr(ProvideData('jlpt', jlptLevel))
    if (strokes) setArr(ProvideData('strokes', strokes))
    if (grades) setArr(ProvideData('grade', grades))
    if (verbs) setArr(Verbs)
    if (nouns) setArr(Nouns)
    if (adjectives) setArr(Adjectives)
    if (adverbs) setArr(Adverbs)
    if (hiragana) setArr(Hiragana)
    if (katakana) setArr(Katakana)
  }, [])

  useEffect(() => {
    console.log('nouns:', Nouns.length)
    console.log('verbs:', Verbs.length)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigateToDetailScreen(item, index)}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        )}
        numColumns={isWord ? (Platform.OS != 'ios' && Platform.OS != 'android' ? 3 : 2) : 5}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </View>
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

export default TemplateKanji
