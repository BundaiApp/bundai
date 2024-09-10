import React, { useEffect, useState } from 'react'
import { Platform, Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Katakana from '../util/katakana.json'
import Hiragana from '../util/hiragana.json'

import { provideData, provideTopWordsData } from '../util/jlptArray'

const JLPT_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1']

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
  const [selectedLevel, setSelectedLevel] = useState('N5')

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
    loadData()
  }, [selectedLevel])

  const loadData = () => {
    if (jlptLevel) setArr(provideData('jlpt', jlptLevel))
    if (strokes) setArr(provideData('strokes', strokes))
    if (grades) setArr(provideData('grade', grades))
    if (verbs) setArr(provideTopWordsData('verbs', selectedLevel.toLowerCase(), 10))
    if (nouns) setArr(provideTopWordsData('nouns', selectedLevel.toLowerCase(), 20))
    if (adjectives) setArr(provideTopWordsData('adjectives', selectedLevel.toLowerCase(), 20))
    if (adverbs) setArr(provideTopWordsData('adverbs', selectedLevel.toLowerCase(), 20))
    if (hiragana) setArr(Hiragana)
    if (katakana) setArr(Katakana)
  }

  const renderJLPTFilter = () => (
    <View style={styles.filterContainer}>
      {JLPT_LEVELS.map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.filterButton,
            selectedLevel === level && styles.selectedFilterButton
          ]}
          onPress={() => setSelectedLevel(level)}
        >
          <Text style={[
            styles.filterButtonText,
            selectedLevel === level && styles.selectedFilterButtonText
          ]}>{level}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      {(nouns || verbs || adjectives || adverbs) && renderJLPTFilter()}
      <FlatList
        data={arr}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigateToDetailScreen(item, index)}>
            <Text style={styles.kanjiText}>{isWord ? item.kanji : item.kanjiName}</Text>
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
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedFilterButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterButtonText: {
    fontSize: 14,
  },
  selectedFilterButtonText: {
    color: 'white',
  },
})

export default TemplateKanji
