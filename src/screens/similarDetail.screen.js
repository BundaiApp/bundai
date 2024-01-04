import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function SimilarDetail({ route }) {
  const { kanji, kanjiArray } = route.params

  useEffect(() => {
    console.log(route.params)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
      <Text style={styles.text}>{kanji}</Text>
      {kanjiArray.map((item) => (
        <>
          <Text style={styles.text}>{item.kanji}</Text>
          <Text style={styles.text}>{item.meaning}</Text>
        </>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
