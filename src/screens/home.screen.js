import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export default function Home({ navigation: { navigate } }) {
  const [topic, setTopic] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <Text style={styles.h3}>Japanese characters</Text>
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <View style={styles.spacerH2} />

        <View style={styles.basicRow}>
          <TouchableOpacity
            style={styles.jlptBlock}
            onPress={() => setTopic('jlpt')}>
            <Text style={styles.h2}>JLPT</Text>
            <Text style={styles.h5}>N1-N5</Text>
          </TouchableOpacity>
          <View style={styles.spacerH} />
          <TouchableOpacity
            style={styles.strokeBlock}
            onPress={() => setTopic('strokes')}>
            <Text style={styles.h2}>Strokes</Text>
            <Text style={styles.h5}>1-24</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacerV} />
        <View style={styles.spacerV} />

        <View style={styles.jlptRow}>
          {topic === 'jlpt' ? (
            <>
              {new Array(5).fill(1).map((i, index) => (
                <TouchableOpacity
                  key={index} // Add a key prop for the map function
                  style={styles.smallBlock}
                  onPress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: 5 - index,
                      strokes: false
                    })
                  }>
                  <Text style={styles.h3}>JLPT {5 - index}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={[
                  styles.smallBlock,
                  { backgroundColor: 'khaki', width: '22%' }
                ]}
                onPress={() =>
                  navigate('AllKanji', { jlpt: true, strokes: false })
                }>
                <Text style={styles.h3}>All Kanji</Text>
              </TouchableOpacity>
            </>
          ) : null}

          {topic === 'strokes' ? (
            <>
              {new Array(24).fill(1).map((i, index) => (
                <TouchableOpacity
                  key={index} // Add a key prop for the map function
                  style={[styles.smallBlock, { backgroundColor: 'tan' }]}
                  onPress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: false,
                      strokes: index + 1
                    })
                  }>
                  <Text style={styles.h3}>{index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={[
                  styles.smallBlock,
                  { backgroundColor: 'tan', width: '22%' }
                ]}
                onPress={() =>
                  navigate('AllKanji', { strokes: true, jlpt: false })
                }>
                <Text style={styles.h3}>All Kanji</Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: '3%'
  },
  blockHolder: {
    width: '95%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    paddingVertical: '4%',
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
  strokeBlock: {
    backgroundColor: 'tan',
    borderRadius: 15,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    //    backgroundColor: 'green',
    flexWrap: true
  },
  smallBlock: {
    backgroundColor: 'gold',
    borderRadius: 10,
    width: '18%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    marginRight: '2%',
    marginBottom: '2%'
  },

  spacerV: {
    height: '2%'
  }
})
