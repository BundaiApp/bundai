import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Strokes from '../util/strokesAll.json'
import Jlpt from '../util/jlptAll.json'
import Grades from '../util/gradesAll.json'

function TemplateKanji({ navigation: { navigate }, route }) {
  const { jlptLevel, strokes, grades } = route.params

  const [arr, setArr] = useState([])

  function navigateToDetailScreen(item) {
    navigate('KanjiDetail', { paramsData: item })
  }

  useEffect(() => {
    if (jlptLevel) setArr(Jlpt[jlptLevel])
    if (strokes) setArr(Strokes[strokes])
    if (grades) setArr(Grades[grades])
  }, [jlptLevel, strokes, grades])

  return (
    <SafeAreaView>
      <FlatList
        data={arr}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigateToDetailScreen(item)}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        )}
        numColumns={5}
        style={styles.flatList} // background color of the FlatList
        contentContainerStyle={styles.flatListContent} // background color of the content
      />
    </SafeAreaView>
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
    backgroundColor: 'ivory'
  },
  // background color of the FlatList
  flatList: {
    backgroundColor: 'ivory',
    paddingHorizontal: '3%'
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
    backgroundColor: 'khaki',
    borderRadius: wp('3%')
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  }
})

export default TemplateKanji
