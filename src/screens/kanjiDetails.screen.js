import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import debounce from 'lodash/debounce'

const windowWidth = Dimensions.get('window').width

export default function KanjiDetail({ route }) {
  const { wholeArr, itemIndex, isWord, isKana } = route.params

  const Pill = ({ subject }) => (
    <View style={styles.pill}>
      <Text style={styles.subtitleText}>{subject}</Text>
    </View>
  )

  const handleScrollEnd = (event) => {
    const { nativeEvent } = event
    const contentOffsetX = nativeEvent.contentOffset?.x || nativeEvent.targetContentOffset?.x || 0
    const currentIndex = Math.floor(contentOffsetX / windowWidth)
    console.log('Current Index:', currentIndex)
    // Do other operations based on currentIndex
  }

  function Page({ kanjiName, meanings, kun, on, hiragana, quizAnswers }) {
    return (
      <View style={styles.scrollviewBackDrop}>
        <Text style={styles.kanji}>{kanjiName}</Text>
        <Text style={styles.header}>Meanings</Text>
        <View style={styles.pillHolder}>
          {typeof meanings != 'string' ? (
            meanings.map((item, index) => <Pill key={item} index={index} subject={item} />)
          ) : (
            <Pill subject={meanings} />
          )}
        </View>

        {isKana ? null : isWord ? (
          <>
            <Text style={styles.header}>hiragana</Text>
            <View style={styles.pillHolder}>
              <Pill subject={hiragana} />
            </View>
          </>
        ) : (
          <>
            <Text style={styles.header}> Kunyomi Readings</Text>
            <View style={styles.pillHolder}>
              {on.map((item, index) => (
                <Pill key={item} index={index} subject={item} />
              ))}
            </View>

            <Text style={styles.header}>Onyomi Readings</Text>
            <View style={styles.pillHolder}>
              {kun.map((item, index) => (
                <Pill key={item} index={index} subject={item} />
              ))}
            </View>
          </>
        )}
      </View>
    )
  }

  return (
    <FlatList
      horizontal
      style={styles.container}
      pagingEnabled
      data={wholeArr}
      initialScrollIndex={itemIndex}
      animated={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${item.kanjiName}_${index}`}
      getItemLayout={(wholeArr, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index
      })}
      onScrollEndDrag={(event) => handleScrollEnd(event)}
      renderItem={({ item }) => Page(item)}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  scrollviewBackDrop: {
    width: windowWidth
  },
  kanji: {
    fontWeight: '600',
    fontSize: 70,
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
