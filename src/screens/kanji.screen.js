import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
)

const KanjiList = ({ navigate, data }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.block}
      onPress={() => navigate('KanjiDetail', { paramsData: item })}>
      <Text style={styles.kanjiText}>{item.kanjiName}</Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.kanjiName}
      numColumns={columns}
    />
  )
}

const YourComponent = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <SectionHeader title="JLPT5" />
      <KanjiList data={Kanji5} navigate={navigate} />

      <View style={styles.spacer} />

      <SectionHeader title="JLPT4" />
      <KanjiList data={Kanji4} navigate={navigate} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 8
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  block: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  kanjiText: {
    fontSize: 20
  },
  spacer: {
    height: 20
  }
})

export default YourComponent
