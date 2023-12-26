import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function KanjiDetail({ route }) {
  const { wholeArr, itemIndex } = route.params

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        data={wholeArr}
        initialScrollIndex={itemIndex}
        animated={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.kanjiName}_${index}`}
        getItemLayout={(wholeArr, index) => ({
          length: wp('100%'),
          offset: wp('100%') * index,
          index
        })}
        renderItem={({ item }) => (
          <View style={styles.scrollviewBackDrop}>
            <Text style={styles.kanji}>{item.kanjiName}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  scrollviewBackDrop: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  kanji: {
    fontWeight: '600',
    fontSize: 100,
    alignSelf: 'center'
  },
  header: {
    fontWeight: '400',
    fontSize: 30,
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'wheat',
    paddingLeft: '5%'
  },
  pillHolder: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    paddingVertical: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  pill: {
    backgroundColor: 'thistle',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    paddingHorizontal: '4%',
    marginRight: '2%',
    marginBottom: '2%'
  },
  subtitleText: {
    fontWeight: '400',
    fontSize: 22,
    fontFamily: 'menlo'
  }
})
