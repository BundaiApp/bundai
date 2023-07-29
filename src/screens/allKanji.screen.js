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
  <View style={styles.sectionHeaderWrapper}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  </View>
)

const Separator = () => <View style={styles.separator} />

const YourComponent = ({ navigation: { navigate }, route }) => {
  const { strokes, jlpt } = route.params

  const combineDataWithSections = data => {
    const combinedData = []
    if (jlpt) {
      for (let i = 5; i >= 1; i--) {
        const jlptLevel = i.toString()
        if (data[jlptLevel]) {
          combinedData.push({
            section: `JLPT${jlptLevel}`,
            isHeader: true
          })
          combinedData.push(
            ...data[jlptLevel].map(item => ({ ...item, isHeader: false }))
          )
        } else {
          combinedData.push({
            section: `JLPT${jlptLevel}`,
            isHeader: true
          })
        }
      }
    } else {
      for (let i = 1; i <= Object.keys(data).length; i++) {
        const strokesCount = i.toString()
        if (data[strokesCount]) {
          combinedData.push({
            section: `Strokes Count ${strokesCount}`,
            isHeader: true
          })
          combinedData.push(
            ...data[strokesCount].map(item => ({ ...item, isHeader: false }))
          )
        } else {
          combinedData.push({
            section: `Strokes Count ${strokesCount}`,
            isHeader: true
          })
        }
      }
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={columns}
        ItemSeparatorComponent={Separator}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp('3%') // Adjust horizontal padding to control the space between items
  },
  sectionHeaderWrapper: {
    width: '100%' // Take up the full width of the FlatList
  },
  sectionHeader: {
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  flatListContent: {
    paddingBottom: hp('5%')
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
    aspectRatio: 1, // Maintain a square shape for the blocks
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    margin: wp('1%') // Adjust the margin to control the space between items
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})

export default YourComponent
