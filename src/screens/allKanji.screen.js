import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import JlptData from '../util/jlptAll.json'
import StrokesData from '../util/strokesAll.json'

const columns = 5 // Number of columns you want

const SectionHeader = ({ strokesCount }) => (
  <View style={styles.sectionHeaderWrapper}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>
        {strokesCount} Stroke{strokesCount === 1 ? null : 's'}{' '}
      </Text>
    </View>
  </View>
)

function AllKanji() {
  return (
    <FlatList
      data={Object.keys(StrokesData)}
      renderItem={({ item }) => (
        <View style={styles.basicRow}>
          <SectionHeader strokesCount={item} />

          {StrokesData[item].map(i => (
            <TouchableOpacity
              style={styles.block}
              onPress={() => navigate('KanjiDetail', { paramsData: item })}>
              <Text style={styles.kanjiText}>{i.kanjiName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    width: '100%', // Take up the full width of the FlatList
    backgroundColor: 'white'
  },
  sectionHeader: {
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'center'
  },
  sectionHeaderText: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18
  },
  block: {
    width: wp('12%'),
    height: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: wp('3%'),
    margin: wp('1%'),
    // Adjust the margin to control the space between items
    backgroundColor: 'khaki',
    marginBottom: '1%'
  },
  kanjiText: {
    fontSize: 30,
    fontWeight: '500'
  },
  basicRow: {
    flexDirection: 'row',
    flexWrap: true,
    backgroundColor: 'silver'
  }
})

export default AllKanji
