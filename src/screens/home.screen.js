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

const whichColor = blockHeader => {
  switch (blockHeader) {
    case 'Stroke':
      return 'tan'
      break
    case 'JLPT':
      return 'gold'
      break
    case 'Grade':
      return 'moccasin'
      break
    default:
      return 'plum'
      break
  }
}

const SmallBlock = ({ handlePress, blockHeader, sub }) => (
  <TouchableOpacity
    style={[styles.jlptBlock, { backgroundColor: whichColor(blockHeader) }]}
    onPress={handlePress}>
    <Text style={styles.headerMedium}>{blockHeader}</Text>
    <Text style={styles.subtitleText}>{sub}</Text>
  </TouchableOpacity>
)

const Pill = ({ index, handlePress, subject, level, isAll }) => (
  <TouchableOpacity
    style={[styles.pill, { backgroundColor: whichColor(subject) }]}
    onPress={handlePress}>
    <Text style={styles.subtitleText}>
      {isAll ? 'All' : subject === 'JLPT' ? 'N' : null}
      {isAll ? null : subject === 'jlpt' ? level - index : index + 1}
    </Text>
  </TouchableOpacity>
)

const VerticalSpacer = ({ height }) => <View style={{ height: `${height}%` }} />
const HorizontalSpacer = ({ width }) => <View style={{ width: `${width}%` }} />

export default function Home({ navigation: { navigate } }) {
  const [topic, setTopic] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <Text style={styles.h3}>Japanese characters</Text>
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <VerticalSpacer height={3} />

        <View style={styles.basicRow}>
          <SmallBlock
            handlePress={() => setTopic('jlpt')}
            blockHeader={'JLPT'}
            sub={'N1-N5'}
          />
          <SmallBlock
            handlePress={() => setTopic('strokes')}
            blockHeader={'Stroke'}
            sub={'1-24'}
          />
          <SmallBlock
            handlePress={() => setTopic('grades')}
            blockHeader={'Grade'}
            sub={'1-9'}
          />
        </View>

        <VerticalSpacer height={5} />

        <View style={styles.jlptRow}>
          {topic === 'jlpt' ? (
            <>
              {new Array(5).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  level={5}
                  subject={'JLPT'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: 5 - index,
                      strokes: false
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() =>
                  navigate('AllKanji', { jlpt: true, strokes: false })
                }
              />
            </>
          ) : null}

          {topic === 'strokes' ? (
            <>
              {new Array(24).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Stroke'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: false,
                      strokes: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() =>
                  navigate('AllKanji', { strokes: true, jlpt: false })
                }
              />
            </>
          ) : null}

          {topic === 'grades' ? (
            <>
              {new Array(9).fill(1).map((i, index) => (
                <Pill
                  key={index}
                  index={index}
                  subject={'Grade'}
                  isAll={false}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: false,
                      strokes: false,
                      grades: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() =>
                  navigate('AllKanji', {
                    grades: true,
                    strokes: false,
                    jlpt: false
                  })
                }
              />
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
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: '3%'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start'
  },
  headerMedium: {
    fontWeight: '400',
    fontSize: 18,
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
  subtitleText: {
    fontWeight: '300',
    fontSize: 12,
    fontFamily: 'menlo',
    color: 'dimgray'
  },
  basicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  jlptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  pill: {
    backgroundColor: 'gold',
    borderRadius: 10,
    width: '18%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    marginRight: '2%',
    marginBottom: '2%'
  },
  pillTan: {
    backgroundColor: 'tan',
    borderRadius: 10,
    width: '22%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    marginRight: '2%',
    marginBottom: '2%'
  }
})
