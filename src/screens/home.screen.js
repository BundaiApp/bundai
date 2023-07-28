import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import Kanji5 from '../util/jlpt5.json'

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <Text style={styles.h3}>Japanese characters</Text>
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <View style={styles.spacerH2} />

        <View style={styles.basicRow}>
          <TouchableOpacity
            style={styles.jlptBlock}
            onPress={() => navigate('JlptKanji')}>
            <Text style={styles.h2}>JLPT</Text>
            <Text style={styles.h5}>N1-N5</Text>
          </TouchableOpacity>
          <View style={styles.spacerH} />
          <TouchableOpacity style={styles.jlptBlock}>
            <Text style={styles.h2}>Strokes</Text>
            <Text style={styles.h5}>1000 感じ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacerV} />
        <View style={styles.jlptRow}>
          {new Array(5).fill(1).map((i, index) => (
            <TouchableOpacity
              style={styles.smallBlock}
              onPress={() =>
                navigate('KanjiTemplate', { paramsData: 5 - index })
              }>
              <Text style={styles.h3}>JLPT {5 - index}</Text>
            </TouchableOpacity>
          ))}
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
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  smallBlock: {
    backgroundColor: 'gold',
    borderRadius: 10,
    width: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    rowGap: wp('2%')
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
    fontSize: 10,
    paddingVertical: '2%',
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  h4: {
    fontWeight: '300',
    fontSize: 15,
    paddingBottom: '2%',
    fontFamily: 'menlo',
    color: 'silver'
  },
  h5: {
    width: '30%',
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: '2%',
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  spacerH: {
    width: '4%',
    height: '1%'
  },
  spacerH2: {
    width: '4%',
    height: '3%'
  },
  basicRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  jlptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%')
  },
  spacerV: {
    height: hp('1%')
  }
})
