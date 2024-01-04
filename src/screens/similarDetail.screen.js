///const { kanji, kanjiArray } = route.params
//export default function SimilarDetails() {
//

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SimilarDetails({ route }) {
  // You would get kanjiArray from route.params
  const { kanji, kanjiArray } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.LeftColumn}>
        <Text style={styles.mainKanji}>{kanji}</Text>
      </View>
      <View style={styles.column}>
        {kanjiArray.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.kanji}>{item.kanji}</Text>
            <Text style={styles.meaning}>{item.meaning}</Text>
            <Text style={styles.reading}>{item.reading}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16
  },
  LeftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  column: {
    flex: 1
  },
  mainKanji: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8 // Add space below the main Kanji
  },
  item: {
    marginBottom: 8 // Add space between items
  },
  kanji: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  meaning: {
    fontSize: 18,
    color: 'gray'
  },
  reading: {
    fontSize: 16,
    color: 'darkgray'
  }
})
