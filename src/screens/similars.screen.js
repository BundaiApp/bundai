import React, { useState, useMemo } from 'react'
import { SafeAreaView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { provideKanjiObject } from '../util/jlptArray.js'

export default function SimilarScreen({ navigation: { navigate } }) {
  const [search, setSearch] = useState('')
  const SIMILAR_DATA = useMemo(() => provideKanjiObject(), [])
  const [filteredData, setFilteredData] = useState(Object.keys(SIMILAR_DATA))

  const searchKanji = (query) => {
    if (!query) return Object.keys(SIMILAR_DATA)

    return Object.entries(SIMILAR_DATA)
      .filter(([kanji, data]) => {
        const lowerQuery = query.toLowerCase()

        // Check kanji
        if (kanji.includes(query)) return true

        // Check meaning
        if (data.meaning && data.meaning.some((m) => m.toLowerCase().includes(lowerQuery)))
          return true

        // Check on readings
        if (data.on && data.on.some((reading) => reading.includes(query))) return true

        // Check kun readings
        if (data.kun && data.kun.some((reading) => reading.includes(query))) return true

        return false
      })
      .map(([kanji]) => kanji)
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
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item}
            style={styles.block}
            onPress={() => {
              navigate('SimilarDetail', {
                kanji: item,
                meaning: SIMILAR_DATA[item].meaning.join(', '),
                furigana: [...SIMILAR_DATA[item].on, ...SIMILAR_DATA[item].kun].join(', '),
                kanjiArray: SIMILAR_DATA[item].related_kanji,
                usedIn: SIMILAR_DATA[item].usedIn
              })
            }}>
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

// ... styles remain unchanged

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
