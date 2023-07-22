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

export default function Exam({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exam</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  }
})
