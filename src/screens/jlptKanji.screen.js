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
    <FlatList
      keyExtractor={item => item}
      data={Object.keys(arr)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.basicRow}>
          <Text>{item}</Text>
          {arr[item].map(i => (
            <TouchableOpacity
              style={styles.block}
              onPress={() => navigate('KanjiDetail', { paramsData: i })}>
              <Text style={styles.title}>{i.kanjiName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%'
  },
  kanjiBlock: {
    fontSize: 30,
    fontWeight: '500',
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  },
  flatList: {
    width: '100%',
    paddingBottom: '5%'
  },
  block: {
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
  headerHolder: {
    alignItems: 'flex-start',
    width: '90%',
    marginTop: '2%',
    marginBottom: '1%'
  },
  basicRow: {
    height: '30%'
  }
})

// renderItem={({ item }) => (
//           <FlatList
//             data={item}
//             renderItem={({ i }) => (
//               <TouchableOpacity style={styles.block}>
//                 <Text style={styles.title}>{i.kanjiName}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         )}
//
