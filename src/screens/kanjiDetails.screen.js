import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'

export default function KanjiDetail({ navigation: { navigate }, route }) {
  const { kanjiName, meanings } = route.params.paramsData

  useEffect(() => {
    console.log(route.params.paramsData)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerHolder}>
        <Text style={styles.heading}>Kanji Detail</Text>

        <Text style={styles.heading}>{kanjiName}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
    paddingHorizontal: '5%'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20
  },
  headerHolder: {
    alignItems: 'flex-start',
    width: '90%'
  }
})
