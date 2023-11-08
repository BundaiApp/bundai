import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

//components
import { Pill } from '../components/blocks'
import { FONTS } from '../components/fonts'
import { VerticalSpacer } from '../components/spacers'

//utils
import Jlpt from '../util/jlptAll.json'
import { topics, words, whichColor } from '../util/constants'

export default function QuizSettings({ navigation: { navigate } }) {
  const [type, setType] = useState('jlpt')
  const [jlptLevel, setJlptLevel] = useState(5)
  const [selected, setSelected] = useState([])

  const checkIfSelected = (item) => {
    return selected.includes(item)
      ? setSelected(selected.filter((i) => i !== item))
      : setSelected([...selected, item])
  }

  const selectAll = () => {
    return setSelected([...selected, ...Jlpt[jlptLevel]])
  }

  const unSelectAll = () => {
    return setSelected([])
  }
  const checkThenNavigate = () => {
    return selected.length === 0
      ? alert('please select some kanji')
      : navigate('QuizEngine', { questionsArray: selected })
  }

  const types = {
    jlpt: 5,
    strokes: 24,
    grades: 9
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {[...topics, ...words].map((item) => (
          <TouchableOpacity
            style={styles.pill}
            key={item.header}
            onPress={() => setType(item.topicName)}>
            <Text style={styles.pillText}>{item.header}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.row}>
        {Object.keys(types).includes(type)
          ? new Array(types[type])
              .fill(1)
              .map((i, index) => (
                <Pill key={index} index={index} subject={'JLPT'} level={5} isAll={false} />
              ))
          : null}
      </View>

      <View style={styles.flatlist}>
        <FlatList
          data={Jlpt[jlptLevel]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.block,
                { backgroundColor: selected.includes(item) ? 'khaki' : 'white' }
              ]}
              onPress={() => checkIfSelected(item)}>
              <Text style={styles.kanjiText}>{item.kanjiName}</Text>
            </TouchableOpacity>
          )}
          numColumns={Platform.OS != 'ios' && Platform.OS != 'android' ? 7 : 5}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <VerticalSpacer height={1} />

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
    height: '60%',
    backgroundColor: '#C4C4B0',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    width: 50,
    height: 50,
    margin: wp('1%'),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: wp('3%')
  },
  kanjiText: {
    fontSize: 22,
    fontWeight: '500'
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

  //pill component
  pill: {
    backgroundColor: 'gold',
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
  }
})

// <ScrollView horizontal={true}>
// 				{new Array(types[type]).fill(1).map((_, index) => (
// 					<Pill key={index} index={index} level={5} isAll={false} />
// 				))}
// 			</ScrollView>
//
