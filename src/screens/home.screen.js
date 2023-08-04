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

const SmallBlock = ({ handlePress, blockHeader, sub }) => (
  <TouchableOpacity
    style={blockHeader === 'JLPT' ? styles.jlptBlock : styles.strokeBlock}
    onPress={handlePress}>
    <Text style={styles.h2}>{blockHeader}</Text>
    <Text style={styles.h5}>{sub}</Text>
  </TouchableOpacity>
)

const Pill = ({ index, handlePress, subject, level, isAll }) => (
  <TouchableOpacity
    key={index ?? '1'} // Add a key prop for the map function
    style={isAll ? styles.pillTan : styles.pill}
    onPress={handlePress}>
    <Text style={styles.h3}>
      {isAll ? 'All Kanji' : subject === 'jlpt' ? 'N' : null}
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
          <HorizontalSpacer width={5} />
          <SmallBlock
            handlePress={() => setTopic('strokes')}
            blockHeader={'Strokes'}
            sub={'1-24'}
          />
        </View>

        <VerticalSpacer height={5} />

        <View style={styles.jlptRow}>
          {topic === 'jlpt' ? (
            <>
              {new Array(5).fill(1).map((i, index) => (
                <Pill
                  index={index}
                  level={5}
                  subject={'jlpt'}
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
                subject={'jlpt'}
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
                  subject={'strokes'}
                  isAll={false}
                  index={index}
                  handlePress={() =>
                    navigate('KanjiTemplate', {
                      jlptLevel: false,
                      strokes: index + 1
                    })
                  }
                />
              ))}
              <Pill
                subject={'strokes'}
                isAll={true}
                handlePress={() =>
                  navigate('AllKanji', { strokes: true, jlpt: false })
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
  basicRow: {
    flexDirection: 'row',
    justifyContent: 'center',
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
