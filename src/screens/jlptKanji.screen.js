import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Kanji5 from '../util/jlpt5.json'
import Kanji4 from '../util/jlpt4.json'
import Kanji3 from '../util/jlpt3.json'

export default function Home({ navigation: { navigate } }) {
  let arr = {
    JLPT5: Kanji5,
    JLPT4: Kanji4,
    JLPT3: Kanji3
  }

  return (
    <ScrollView>
      <Text style={styles.heading}>JLPT5</Text>
      <View style={styles.wrapBox}>
        {Kanji5.map(item => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>JLPT4</Text>
      <View style={styles.wrapBox}>
        {Kanji4.map(item => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
  },
  wrapBox: {
    flexWrap: true,
    flexDirection: 'row',
    flex: 1
  }
})
