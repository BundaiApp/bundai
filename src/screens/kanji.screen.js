import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
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

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeaderWrapper}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  </View>
)

const Separator = () => <View style={styles.separator} />

const YourComponent = ({ navigate }) => {
  const combineDataWithSections = data => {
    let combinedData = []
    data.forEach((sectionData, index) => {
      combinedData.push({ section: `JLPT${index + 1}`, isHeader: true })
      combinedData = combinedData.concat(
        sectionData.map(item => ({ ...item, isHeader: false }))
      )
    })
    return combinedData
  }

  const data = combineDataWithSections([Kanji5, Kanji4, Kanji3, Kanji2, Kanji1])

  const renderItem = ({ item }) => {
    if (item.isHeader) {
      return <SectionHeader title={item.section} />
    }

    return (
      <TouchableOpacity
        style={styles.block}
        onPress={() => navigate('KanjiDetail', { paramsData: item })}>
        <Text style={styles.kanjiText}>{item.kanjiName}</Text>
      </TouchableOpacity>
    )
  }

  const keyExtractor = (item, index) => `${item.kanjiName}_${index}`

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={columns}
      ItemSeparatorComponent={Separator}
      style={styles.flatList} // background color of the FlatList
      contentContainerStyle={styles.flatListContent} // background color of the content
    />
  )
}

const styles = StyleSheet.create({
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
    fontWeight: 500
  }
})

export default YourComponent
