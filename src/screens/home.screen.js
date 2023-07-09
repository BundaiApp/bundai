import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'

import Kanji from '../util/jlpt5.json'

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Bundai だろ？</Text>
        {Kanji.map((item) => (
          <Text style={styles.kanjiBlock} key={item.kanjiName}>
            {item.kanjiName}
          </Text>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kanjiBlock: {
    fontSize: 25,
    fontWeight: '500'
  }
})
