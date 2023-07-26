import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  useWindowDimensions
} from 'react-native'

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'

export default function Home({ navigation: { navigate } }) {
  const { height, width } = useWindowDimensions()

  const [col, setCol] = useState(7)

  useEffect(() => {
    switch (width) {
      case width < 650:
        setCol(5)
        break

      case width < 400:
        setCol(3)
        break
      default:
        7
        break
    }
  }, [width])

  return (
    <View style={styles.container}>
      <View style={styles.headerHolder}>
        <Text style={styles.heading}>JLPT 5</Text>
      </View>
      <FlatList
        data={Kanji5}
        numColumns={col}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiBlock}>{item.kanjiName}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.kanjiName}
      />

      <View style={styles.headerHolder}>
        <Text style={styles.heading}>JLPT 4</Text>
      </View>
      <FlatList
        data={Kanji4}
        numColumns={col}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiBlock}>{item.kanjiName}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.kanjiName}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%'
  },
  kanjiBlock: {
    fontSize: 30,
    fontWeight: '500',
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  },
  flatList: {
    width: '100%',
    paddingBottom: '5%'
  },
  block: {
    marginVertical: '2%',
    marginHorizontal: '2%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20
  },
  headerHolder: {
    alignItems: 'flex-start',
    width: '90%',
    marginTop: '2%',
    marginBottom: '1%'
  }
})
