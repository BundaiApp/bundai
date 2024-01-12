import React from 'react'
import { View, Text, SectionList, TouchableOpacity, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import ProvideData from '../util/jlptArray'

const columns = 5 // Number of columns you want

const SectionHeader = ({ title }) => <Text style={styles.sectionHeaderText}>{title}</Text>

const Separator = () => <View style={styles.separator} />

const AllKanjiComponent = ({ navigation: { navigate }, route }) => {
  const { type, jlpt, strokes, grades } = route.params
  //const { wholeArr, itemIndex, isWord, isKana } = route.params

  const combineDataWithSections = (data) => {
    const sections = []
    if (jlpt) {
      for (let i = 5; i >= 1; i--) {
        const jlptLevel = i
        if (data[jlptLevel] && data[jlptLevel].length > 0) {
          const chunkedData = chunkArray(data[jlptLevel], columns)
          sections.push({
            title: `JLPT${jlptLevel}`,
            data: chunkedData
          })
        }
      }
    } else if (strokes) {
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
    } else if (grades) {
      for (let i = 1; i <= Object.keys(data).length; i++) {
        const gradesCount = i.toString()
        if (data[gradesCount] && data[gradesCount].length > 0) {
          const chunkedData = chunkArray(data[gradesCount], columns)
          sections.push({
            title: `Grade ${gradesCount}`,
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

  const whichTypeOfData = () => {
    if (strokes) return ProvideData('strokes', 1, true)
    if (jlpt) return ProvideData('jlpt', 1, true)
    if (grades) return ProvideData('grade', 1, true)
  }

  const data = combineDataWithSections(whichTypeOfData())

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {item.map((kanjiItem, index) => (
        <TouchableOpacity
          key={index}
          style={styles.block}
          onPress={() =>
            navigate('KanjiDetail', {
              isWord: false,
              isKana: false,
              wholeArr: ProvideData(
                type,
                jlpt ? kanjiItem.jlpt : strokes ? kanjiItem.strokes : kanjiItem.grade,
                false
              ),
              itemIndex: index
            })
          }>
          <Text style={styles.kanjiText}>{kanjiItem.kanjiName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderSectionHeader = ({ section }) => <SectionHeader title={section.title} />

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

export default AllKanjiComponent
