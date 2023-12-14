import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Pill = ({ subject }) => (
  <View style={styles.pill}>
    <Text style={styles.subtitleText}>{subject}</Text>
  </View>
)

export default function KanjiDetail({ route }) {
  const { isWord, isKana } = route.params
  const { kanjiName, meanings, kun, on, hiragana, quizAnswers } = route.params.paramsData

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    backgroundColor: 'ivory'
  },
  scrollviewBackDrop: {
    backgroundColor: 'ivory'
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
