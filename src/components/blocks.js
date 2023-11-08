import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
//components
import { VerticalSpacer } from '../components/spacers'

//utils
import { whichColor } from '../util/constants'

export const SmallBlock = ({ handlePress, blockHeader, sub }) => (
  <TouchableOpacity
    style={[styles.jlptBlock, { backgroundColor: whichColor[blockHeader] }]}
    onPress={handlePress}>
    <Text style={styles.headerMedium}>{blockHeader}</Text>
    <VerticalSpacer height={2} />
    <Text style={styles.subtitleText}>{sub}</Text>
  </TouchableOpacity>
)

export const Pill = ({ index, handlePress, subject, level, isAll, isSelected }) => (
  <TouchableOpacity
    style={[
      styles.pill,
      { backgroundColor: whichColor[isAll || isSelected ? 'Adverbs' : subject] }
    ]}
    onPress={handlePress}>
    <Text style={styles.subtitleText}>
      {isAll ? 'All' : subject === 'JLPT' ? 'N' : null}
      {isAll ? null : subject === 'JLPT' ? level - index : index + 1}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  jlptBlock: {
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: '3%',
    marginBottom: '2%'
  },
  headerMedium: {
    fontWeight: '400',
    fontSize: 18,
    fontFamily: 'menlo'
  },

  //pill component
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

  //common to all
  subtitleText: {
    fontWeight: '300',
    fontSize: 12,
    fontFamily: 'menlo',
    color: 'dimgray'
  }
})
