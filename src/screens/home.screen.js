import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'

import Kanji5 from '../util/jlpt5.json'

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <Text style={styles.h3}>Japanese characters</Text>
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <View style={styles.basicRow}>
          <TouchableOpacity
            style={styles.jlptBlock}
            onPress={() => navigate('JlptKanji')}>
            <Text style={styles.h2}>JLPT</Text>
          </TouchableOpacity>
          <View style={styles.spacerH} />
          <TouchableOpacity style={styles.jlptBlock}>
            <Text style={styles.h2}>Strokes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '3%'
  },
  blockHolder: {
    width: '90%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: 'lightyellow'
  },
  jlptBlock: {
    backgroundColor: 'gold',
    borderRadius: 15,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  strokeBlock: {
    backgroundColor: 'lightgreen',
    borderRadius: 15,
    width: '45%',
    alignItems: 'center'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start'
  },
  h2: {
    fontWeight: '400',
    fontSize: 18,
    paddingVertical: '8%',
    paddingHorizontal: '10%',
    fontFamily: 'menlo'
  },
  h3: {
    fontWeight: '300',
    fontSize: 18,
    paddingVertical: '1%',
    fontFamily: 'menlo',
    color: 'gray'
  },
  h4: {
    fontWeight: '300',
    fontSize: 15,
    paddingBottom: '2%',
    fontFamily: 'menlo',
    color: 'silver'
  },
  spacerH: {
    width: '4%',
    height: '1%'
  },
  basicRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
