import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

//components
import { Pill } from '../components/blocks'
import { FONTS } from '../components/fonts'
import { VerticalSpacer } from '../components/spacers'

//utils
import { topics, words, kana } from '../util/constants'

//data
import ProvideData from '../util/jlptArray'
import Verbs from '../util/verbs.json'
import Nouns from '../util/nouns.json'
import Adjectives from '../util/adj.json'
import Adverbs from '../util/adverbs.json'
import Katakana from '../util/katakana.json'
import Hiragana from '../util/hiragana.json'

export default function QuizSettings({ navigation: { navigate } }) {
  const [type, setType] = useState('jlpt')
  const [level, setLevel] = useState(5)
  const [selected, setSelected] = useState([])

  const checkIfSelected = (item) => {
    return selected.includes(item)
      ? setSelected(selected.filter((i) => i !== item))
      : setSelected([...selected, item])
  }

  const selectAll = () => {
    return type === 'jlpt' || type === 'strokes' || type === 'grades'
      ? setSelected([...selected, ...dataTypes[type][level]])
      : setSelected([...selected, ...dataTypes[type]])
  }

  const unSelectAll = () => {
    return setSelected([])
  }
  const checkThenNavigate = () => {
    return selected.length === 0
      ? alert('please select some kanji')
      : navigate('QuizEngine', { questionsArray: selected })
  }

  const dataTypes = {
    jlpt: ProvideData('jlpt', 1, true),
    strokes: ProvideData('strokes', 1, true),
    grades: ProvideData('grade', 1, true),
    verbs: Verbs,
    nouns: Nouns,
    adjectives: Adjectives,
    adverbs: Adverbs,
    hiragana: Hiragana,
    katakana: Katakana
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {[...topics, ...words, ...kana].map((item) => (
          <TouchableOpacity
            style={[
              styles.pill,
              { backgroundColor: type == item.topicName ? 'lightskyblue' : 'khaki' }
            ]}
            key={item.header}
            onPress={() => setType(item.topicName)}>
            <Text style={styles.pillText}>{item.header}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.jlptRow}>
        {type === 'jlpt'
          ? new Array(5)
              .fill(1)
              .map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  level={5}
                  subject={'JLPT'}
                  isAll={false}
                  isSelected={level === 5 - index}
                  handlePress={() => setLevel(5 - index)}
                />
              ))
          : null}

        {type === 'strokes'
          ? new Array(24)
              .fill(1)
              .map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Stroke'}
                  isAll={false}
                  isSelected={level === index + 1}
                  handlePress={() => setLevel(index + 1)}
                />
              ))
          : null}

        {type === 'grades'
          ? new Array(9)
              .fill(1)
              .map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Grade'}
                  isAll={false}
                  isSelected={level === index + 1}
                  handlePress={() => setLevel(index + 1)}
                />
              ))
          : null}
      </View>

      <View
        style={[
          styles.flatlist,
          {
            height: type === 'strokes' ? '30%' : '40%'
          }
        ]}>
        <FlatList
          data={
            type === 'jlpt' || type === 'strokes' || type === 'grades'
              ? dataTypes[type][level]
              : dataTypes[type]
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.block,
                { backgroundColor: selected.includes(item) ? 'khaki' : 'white' },
                { width: type === 'jlpt' || type === 'strokes' || type === 'grades' ? 50 : 100 }
              ]}
              onPress={() => checkIfSelected(item)}>
              <Text style={styles.kanjiText}>{item.kanjiName}</Text>
            </TouchableOpacity>
          )}
          numColumns={Platform.OS != 'ios' && Platform.OS != 'android' ? 7 : 3}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <VerticalSpacer height={Platform.OS != 'ios' && Platform.OS != 'android' ? 3 : 10} />

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.selectButton} onPress={selectAll}>
          <Text style={styles.buttonText}>select all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectButton} onPress={unSelectAll}>
          <Text style={styles.buttonText}>unselect all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.quizButton} onPress={checkThenNavigate}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
    paddingTop: '2%',
    backgroundColor: 'beige'
  },
  text: {
    ...FONTS.bold24
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  flatlist: {
    width: '100%',
    backgroundColor: '#C4C4B0',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    height: 50,
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10
  },
  kanjiText: {
    fontSize: 22,
    fontWeight: '400'
  },
  quizButton: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectButton: {
    width: '45%',
    borderRadius: 20,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    ...FONTS.bold18,
    marginVertical: 15
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },

  pill: {
    borderRadius: 10,
    width: '18%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2%',
    marginRight: '2%',
    marginBottom: '2%'
  },
  pillText: {
    fontWeight: '300',
    fontSize: 12,
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  jlptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})

// <ScrollView horizontal={true}>
// 				{new Array(types[type]).fill(1).map((_, index) => (
// 					<Pill key={index} index={index} level={5} isAll={false} />
// 				))}
// 			</ScrollView>
//
