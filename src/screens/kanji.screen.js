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

const Separator = () => <View style={styles.separator} />

const KanjiList = ({ navigate }) => {
  // Combine your data and sections
  const data = [
    { section: 'JLPT5', data: Kanji5 },
    { section: 'JLPT4', data: Kanji4 }
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.block}
      onPress={() => navigate('KanjiDetail', { paramsData: item })}>
      <Text style={styles.kanjiText}>{item.kanjiName}</Text>
    </TouchableOpacity>
  )

  const renderSectionHeader = ({ section: { section } }) => (
    <SectionHeader title={section} />
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.kanjiName}
      numColumns={columns}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={<View style={styles.spacer} />}
      ListFooterComponent={<View style={styles.spacer} />}
      renderSectionHeader={renderSectionHeader}
    />
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 8
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  separator: {
    height: 10
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

export default KanjiList
