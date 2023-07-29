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
    const combinedData = []
    if (jlpt) {
      Object.entries(data)
        .reverse()
        .forEach(([jlptLevel, kanjiArray]) => {
          combinedData.push({
            section: `JLPT${jlptLevel}`,
            isHeader: true
          })
          combinedData.push(
            ...kanjiArray.map(item => ({ ...item, isHeader: false }))
          )
        })
    } else {
      Object.entries(data).forEach(([strokes, kanjiArray]) => {
        combinedData.push({
          section: `Strokes Count ${strokes}`,
          isHeader: true
        })
        combinedData.push(
          ...kanjiArray.map(item => ({ ...item, isHeader: false }))
        )
      })
    }
    return combinedData
  }

  const data = combineDataWithSections(strokes ? StrokesData : JlptData)

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
    height: hp('2%'),
    width: '90%' // Take up the full width of the FlatList
  },
  sectionHeader: {
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  flatListContent: {
    backgroundColor: 'white',
    paddingBottom: hp('5%'),
    paddingHorizontal: wp('3%') // Adjust horizontal padding to control the space between items
  },
  flatList: {
    backgroundColor: 'white'
  },
  sectionHeaderText: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18
  },
  separator: {
    height: hp('1%')
  },
  block: {
    flex: 1,
    margin: wp('1%'), // Adjust the margin to control the space between items
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
  }
})

export default YourComponent
