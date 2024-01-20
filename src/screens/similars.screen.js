import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import SIMILAR_DATA from '../util/similar.json'

export default function SimilarScreen({ navigation: { navigate } }) {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState(Object.keys(SIMILAR_DATA))

  const handleSearch = (text) => {
    setSearch(text)
    if (text) {
      const newData = Object.keys(SIMILAR_DATA).filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      )
      setFilteredData(newData)
    } else {
      setFilteredData(Object.keys(SIMILAR_DATA))
    }
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
                kanjiArray: SIMILAR_DATA[item].related_kanji
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
