import React from 'react'
import { SafeAreaView, View, Text, SectionList, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import SimilarsData from '../util/similar.json' // Adjust the import according to your file structure

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => <Text style={styles.sectionHeaderText}>{title}</Text>

const Separator = () => <View style={styles.separator} />

const SimilarScreen = ({ navigation: { navigate } }) => {
  const chunkArray = (array, chunkSize) => {
    const chunkedArray = []
    let index = 0
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + chunkSize))
      index += chunkSize
    }
    return chunkedArray
  }

  const combineDataWithSections = (data) => {
    const sections = []
    Object.keys(data).forEach((kanji) => {
      const chunkedData = chunkArray(data[kanji], columns)
      sections.push({
        title: kanji,
        data: chunkedData
      })
    })
    return sections
  }

  const data = combineDataWithSections(SimilarsData)

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {item.map((kanjiItem, index) => (
        <View key={index} style={styles.block}>
          <Text style={styles.kanjiText}>{kanjiItem.kanji}</Text>
          <Text style={styles.kanjiMeaning}>{kanjiItem.meaning}</Text>
        </View>
      ))}
    </View>
  )

  const renderSectionHeader = ({ section }) => <SectionHeader title={section.title} />

  const keyExtractor = (item, index) => `item_${index}`

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
        style={styles.sectionList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionList: {
    backgroundColor: 'lightyellow',
    paddingBottom: hp('4%')
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 32,
    paddingVertical: hp('2.5%'),
    paddingLeft: wp('3%'),
    backgroundColor: 'khaki'
  },
  separator: {
    height: hp('1%')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  },
  kanjiMeaning: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  }
})

export default SimilarScreen
