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
import Kanji2 from '../util/jlpt2.json'
import Kanji1 from '../util/jlpt1.json'

export default function Kanji({ navigation: { navigate } }) {
  let arr = {
    JLPT5: Kanji5,
    JLPT4: Kanji4,
    JLPT3: Kanji3
  }

  return (
    <ScrollView>
      <View style={styles.spacer} />
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

      <View style={styles.spacer} />

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

      <View style={styles.spacer} />

      <Text style={styles.heading}>JLPT3</Text>
      <View style={styles.wrapBox}>
        {Kanji3.map(item => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.spacer} />

      <Text style={styles.heading}>JLPT2</Text>
      <View style={styles.wrapBox}>
        {Kanji2.map(item => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.spacer} />

      <Text style={styles.heading}>JLPT1</Text>
      <View style={styles.wrapBox}>
        {Kanji1.map(item => (
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigate('KanjiDetail', { paramsData: item })}>
            <Text style={styles.kanjiText}>{item.kanjiName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.spacer} />
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
    fontSize: 20,
    marginLeft: wp('4%'),
    marginVertical: hp('2%')
  },
  wrapBox: {
    flex: 1,
    flexWrap: true,
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    backgroundColor: 'lightgray'
  },
  spacer: {
    height: hp('2%')
  }
})