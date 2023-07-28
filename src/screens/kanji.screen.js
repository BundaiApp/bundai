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

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
)

const Separator = () => <View style={styles.separator} />

const YourComponent = ({ navigate }) => {
  const combineData = data => {
    let combinedData = []
    data.forEach((sectionData, index) => {
      combinedData.push({ section: `JLPT${index + 1}` })
      combinedData = combinedData.concat(sectionData)
    })
    return combinedData
  }

  const data = combineData([Kanji5, Kanji4])

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
    height: hp('1%')
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
