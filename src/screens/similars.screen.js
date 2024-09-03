import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { toHiragana } from 'wanakana'

import SIMILAR_DATA from '../util/similar.json'

export default function SimilarScreen({ navigation: { navigate } }) {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(Object.keys(SIMILAR_DATA))

  const searchKanji = (query) => {
    if (!query) return Object.keys(SIMILAR_DATA)

    return Object.entries(SIMILAR_DATA).filter(([kanji, data]) => {
      const lowerQuery = query.toLowerCase()
      // Check kanji
      if (kanji.includes(query)) return true
      // Check meaning
      if (data.meaning && data.meaning.toLowerCase().includes(lowerQuery)) return true
      // Check furigana
      if (data.furigana && data.furigana.includes(query)) return true
      return false
    }).map(([kanji]) => kanji)
  }

  const handleSearch = (text) => {
    setSearch(text)
    const results = searchKanji(text)
    setFilteredData(results)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here..."
        value={search}
        onChangeText={(text) => handleSearch(text)}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item}
            style={styles.block}
            onPress={() =>
              navigate('SimilarDetail', {
                kanji: item,
                meaning: SIMILAR_DATA[item].meaning,
                furigana: SIMILAR_DATA[item].furigana,
                kanjiArray: SIMILAR_DATA[item].related_kanji,
                usedIn: SIMILAR_DATA[item].usedIn
              })
            }>
            <Text style={styles.kanjiText}>{item}</Text>
          </TouchableOpacity>
        )}
        numColumns={5}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
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
  searchBar: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    margin: 10,
    borderColor: '#009688',
    backgroundColor: 'white'
  }
})
