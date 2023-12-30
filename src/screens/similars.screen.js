import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function SimilarScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Similars</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  }
})
