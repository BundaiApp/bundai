import React from 'react'
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import JlptData from '../util/jlptAll.json'
import StrokesData from '../util/strokesAll.json'

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => (
  <Text style={styles.sectionHeaderText}>{title}</Text>
)

const Separator = () => <View style={styles.separator} />

const YourComponent = ({ navigation: { navigate }, route }) => {
  const { strokes, jlpt } = route.params

  const combineDataWithSections = data => {
    const sections = []
    if (jlpt) {
      for (let i = 5; i >= 1; i--) {
        const jlptLevel = i.toString()
        if (data[jlptLevel] && data[jlptLevel].length > 0) {
          const chunkedData = chunkArray(data[jlptLevel], columns)
          sections.push({
            title: `JLPT${jlptLevel}`,
            data: chunkedData
          })
        }
      }
    } else {
      for (let i = 1; i <= Object.keys(data).length; i++) {
        const strokesCount = i.toString()
        if (data[strokesCount] && data[strokesCount].length > 0) {
          const chunkedData = chunkArray(data[strokesCount], columns)
          sections.push({
            title: `Strokes Count ${strokesCount}`,
            data: chunkedData
          })
        }
      }
    }

    return sections
  }

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = []
    let index = 0
    while (index < array.length) {
      chunkedArray.push(array.slice(index, index + chunkSize))
      index += chunkSize
    }
    return chunkedArray
  }

  const data = combineDataWithSections(strokes ? StrokesData : JlptData)

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {item.map((kanjiItem, index) => (
        <TouchableOpacity
          key={index}
          style={styles.block}
          onPress={() => navigate('KanjiDetail', { paramsData: kanjiItem })}>
          <Text style={styles.kanjiText}>{kanjiItem.kanjiName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderSectionHeader = ({ section }) => (
    <SectionHeader title={section.title} />
  )

  const keyExtractor = (item, index) => `item_${index}`

  return (
    <SectionList
      sections={data}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
      style={styles.sectionList} // background color of the SectionList
    />
  )
}

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: 'white',
    paddingBottom: hp('5%'),
    paddingHorizontal: wp('3%') // Adjust horizontal padding to control the space between items
  },
  sectionHeaderText: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: hp('2.5%'),
    paddingHorizontal: hp('1%'),
    backgroundColor: 'white'
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
    margin: wp('1%'), // Adjust the margin to control the space between items
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'khaki',
    borderRadius: wp('3%')
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})

export default YourComponent
