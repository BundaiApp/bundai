import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
  useWindowDimensions
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { FlatGrid, SectionGrid } from 'react-native-super-grid'

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'
import Kanji3 from '../util/jlpt3.json'

export default function Home({ navigation: { navigate } }) {
  const { height, width } = useWindowDimensions()

  let arr2 = [
    {
      title: 'JLPT5',
      data: Kanji5
    },
    {
      title: 'JLPT4',
      data: Kanji4
    }
  ]

  return (
    <SectionGrid
      itemDimension={130}
      sections={arr2}
      maxDimension={width}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.block}>
          <Text style={styles.kanjiText}>{item.kanjiName}</Text>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.heading}>{section.title}</Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%'
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500',
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  },
  block: {
    width: wp('12%'),
    height: wp('12%'),
    marginVertical: '2%',
    marginHorizontal: '2%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20
  }
})
