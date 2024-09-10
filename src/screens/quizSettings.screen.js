import React, { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useMutation } from '@apollo/client'

//components
import { Pill } from '../components/blocks'
import { FONTS } from '../components/fonts'
import { VerticalSpacer } from '../components/spacers'

//utils
import { topics, words, kana } from '../util/constants'
import AuthContext from '../contexts/authContext.js'

//data
import ProvideData from '../util/jlptArray'
import Verbs from '../util/verbs.json'
import Adjectives from '../util/adj.json'
import Adverbs from '../util/adverbs.json'
import Katakana from '../util/katakana.json'
import Hiragana from '../util/hiragana.json'

//graphQL
import ADD_BULK_FLASHCARD from '../mutations/addBulkFlashCard.mutation.js'

export default function QuizSettings({ navigation: { navigate } }) {
  const [type, setType] = useState('jlpt')
  const [level, setLevel] = useState(5)
  const [selected, setSelected] = useState([])
  const [quizType, setQuizType] = useState('meaning')
  const [isWritten, setIsWritten] = useState(false)

  //context
  const { auth } = useContext(AuthContext)

  //mutation
  const [addBulk, { loading }] = useMutation(ADD_BULK_FLASHCARD)

  async function addCardsInBulk() {
    let modifiedSelected = await selected.map((item) => ({
      kanjiName: item.kanjiName,
      meanings: item.meanings,
      quizAnswers: item.quizAnswers
    }))
    await addBulk({
      variables: {
        userId: auth.userId,
        kanjis: modifiedSelected
      }
    })
  }

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

  const checkThenNavigate = () => {
    return selected.length === 0
      ? alert('please select some kanji')
      : navigate('QuizEngine', { questionsArray: selected, quizType, isWritten })
  }

  const dataTypes = {
    jlpt: ProvideData('jlpt', 1, true),
    strokes: ProvideData('strokes', 1, true),
    grades: ProvideData('grade', 1, true),
    verbs: Verbs,
    adjectives: Adjectives,
    adverbs: Adverbs,
    hiragana: Hiragana,
    katakana: Katakana
  }

  return (
    <View style={styles.container}>
      {/* #################  first container ################## */}
      {/* #################  first container ################## */}
      <View style={[styles.firstContainer, { flex: Platform.OS === 'ios' ? 1 : 2 }]}>
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

      {/* #################  second container ################## */}
      {/* #################  second container ################## */}

      <View style={styles.secondContainer}>
        <ScrollView horizontal>
          {type === 'jlpt'
            ? new Array(5).fill(1).map((i, index) => (
                <TouchableOpacity
                  key={`jlpt${5 - index}`}
                  style={styles.pillForSecondRow}
                  onPress={() => setLevel(5 - index)}>
                  <Text style={styles.buttonTextSmall}>
                    {'N'}
                    {5 - index}
                  </Text>
                </TouchableOpacity>
              ))
            : null}
          {type === 'grades'
            ? new Array(9).fill(1).map((i, index) => (
                <TouchableOpacity
                  key={`grades${index + 1}`}
                  style={styles.pillForSecondRow}
                  onPress={() => setLevel(index + 1)}>
                  <Text style={styles.buttonTextSmall}>{index + 1}</Text>
                </TouchableOpacity>
              ))
            : null}
          {type === 'strokes'
            ? new Array(24).fill(1).map((i, index) => (
                <TouchableOpacity
                  key={`stroke${index + 1}`}
                  style={styles.pillForSecondRow}
                  onPress={() => setLevel(index + 1)}>
                  <Text style={styles.buttonTextSmall}>{index + 1}</Text>
                </TouchableOpacity>
              ))
            : null}
        </ScrollView>
      </View>

      {/* #################  third container ################## */}
      {/* #################  third container ################## */}

      <View style={styles.flatlist}>
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

      <VerticalSpacer height={Platform.OS != 'ios' && Platform.OS != 'android' ? 2 : 10} />

      {/* #################  fourth container ################## */}
      {/* #################  fourth container ################## */}
      <View style={styles.selectionRow}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.selectButtonTopRow} onPress={selectAll}>
            <Text style={styles.buttonTextTopRow}>select all</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButtonTopRow} onPress={() => setSelected([])}>
            <Text style={styles.buttonTextTopRow}>unselect</Text>
          </TouchableOpacity>
          {loading ? (
            <View style={styles.selectButtonTopRow}>
              <Text style={styles.buttonTextTopRow}>loading...</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.selectButtonTopRow} onPress={() => addCardsInBulk()}>
              <Text style={styles.buttonTextTopRow}>save all</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.selectButton, { backgroundColor: isWritten ? 'thistle' : 'khaki' }]}
            onPress={() => setIsWritten(!isWritten)}>
            <Text style={styles.buttonText}>Written</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectButton, { backgroundColor: isWritten ? 'khaki' : 'thistle' }]}
            onPress={() => setIsWritten(!isWritten)}>
            <Text style={styles.buttonText}>MCQ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[
              styles.selectSmallButton,
              { backgroundColor: quizType === 'meaning' ? 'thistle' : 'khaki' }
            ]}
            onPress={() => setQuizType('meaning')}>
            <Text style={styles.buttonTextSmall}>meaning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectSmallButton,
              { backgroundColor: quizType === 'part' ? 'thistle' : 'khaki' }
            ]}
            onPress={() => setQuizType('part')}>
            <Text style={styles.buttonTextSmall}>on</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.selectSmallButton,
              { backgroundColor: quizType === 'full' ? 'thistle' : 'khaki' }
            ]}
            onPress={() => setQuizType('full')}>
            <Text style={styles.buttonTextSmall}>kun</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ################# last container ################## */}
      {/* ################# last container ################## */}
      <View style={styles.endContainer}>
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
    paddingHorizontal: '5%',
    paddingTop: '2%',
    backgroundColor: 'beige'
  },

  // various flex values for sub containers
  firstContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  secondContainer: {
    flex: 1
  },
  flatlist: {
    flex: 3,
    width: '100%',
    backgroundColor: '#C4C4B0',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectionRow: {
    flex: 2,
    justifyContent: 'space-around',
    width: '100%'
  },
  endContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },

  // various flex values for sub containers

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
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
  selectButtonTopRow: {
    width: '30%',
    borderRadius: 20,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectSmallButton: {
    width: '25%',
    borderRadius: 20,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    ...FONTS.bold18,
    marginVertical: 10
  },
  buttonTextTopRow: {
    ...FONTS.bold14,
    marginVertical: 5
  },
  buttonTextSmall: {
    ...FONTS.bold14,
    marginVertical: 10
  },

  pill: {
    backgroundColor: 'red',
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
  text: {
    ...FONTS.bold24
  },

  pillForSecondRow: {
    width: 100,
    height: 40,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
