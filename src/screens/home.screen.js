import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const whichColor = blockHeader => {
  switch (blockHeader) {
    case 'Stroke':
      return 'palegoldenrod'
      break
    case 'JLPT':
      return 'thistle'
      break
    case 'Grade':
      return 'moccasin'
      break
    default:
      return 'lightskyblue'
      break
  }
}

const SmallBlock = ({ handlePress, blockHeader, sub }) => (
  <TouchableOpacity
    style={[styles.jlptBlock, { backgroundColor: whichColor(blockHeader) }]}
    onPress={handlePress}>
    <Text style={styles.headerMedium}>{blockHeader}</Text>
    <VerticalSpacer height={2} />
    <Text style={styles.subtitleText}>{sub}</Text>
  </TouchableOpacity>
)

const Pill = ({ index, handlePress, subject, level, isAll }) => (
  <TouchableOpacity
    style={[styles.pill, { backgroundColor: whichColor(subject) }]}
    onPress={handlePress}>
    <Text style={styles.subtitleText}>
      {isAll ? 'All' : subject === 'JLPT' ? 'N' : null}
      {isAll ? null : subject === 'JLPT' ? level - index : index + 1}
    </Text>
  </TouchableOpacity>
)

const VerticalSpacer = ({ height }) => <View style={{ height: `${height}%` }} />
const HorizontalSpacer = ({ width }) => <View style={{ width: `${width}%` }} />

const topics = [
  {
    topicName: 'jlpt',
    header: 'JLPT',
    subtitle: 'N1-N5'
  },
  {
    topicName: 'strokes',
    header: 'Stroke',
    subtitle: '1-24'
  },
  {
    topicName: 'grades',
    header: 'Grade',
    subtitle: '1-9'
  }
]

export default function Home({ navigation: { navigate } }) {
  const [topic, setTopic] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <VerticalSpacer height={3} />

      <View style={styles.blockHolder}>
        <Text style={styles.h1}>Kanji</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>Japanese characters</Text>
        <VerticalSpacer height={2} />
        <Text style={styles.h4}>With meanings & pronunciations</Text>

        <VerticalSpacer height={3} />

        <View style={styles.basicRow}>
          {topics.map(i => (
            <SmallBlock
              key={i.topicName}
              handlePress={() => setTopic(i.topicName)}
              blockHeader={i.header}
              sub={i.subtitle}
            />
          ))}
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
                      jlptLevel: 5 - index
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { jlpt: true })}
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
                      strokes: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { strokes: true })}
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
                      grades: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'tan'}
                isAll={true}
                handlePress={() => navigate('AllKanji', { grades: true })}
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
    alignItems: 'center'
  },
  blockHolder: {
    width: '95%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    paddingTop: '7%',
    backgroundColor: 'honeydew'
  },
  jlptBlock: {
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: '3%'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    fontFamily: 'menlo'
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
    fontFamily: 'menlo',
    color: 'gray'
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
  }
})
