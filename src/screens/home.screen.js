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
      <Text style={styles.header}>Kanji</Text>
      <View style={styles.blockHolder}>
        <TouchableOpacity
          style={styles.jlptBlock}
          onPress={() => navigate('JlptKanji')}>
          <Text style={styles.blockText}>JLPT 5</Text>
        </TouchableOpacity>
        <View style={styles.spacerH} />
        <TouchableOpacity style={styles.strokeBlock}>
          <Text style={styles.blockText}>Stroke Based</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  blockHolder: {
    width: '100%',
    flexDirection: 'row',
    //backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  jlptBlock: {
    backgroundColor: 'orange',
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  strokeBlock: {
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: '3%',
    marginVertical: '2%'
  },
  blockText: {
    fontWeight: '500',
    fontSize: 20,
    paddingVertical: '15%',
    paddingHorizontal: '3%'
  },
  spacerH: {
    width: '4%',
    height: '1%'
  }
})
