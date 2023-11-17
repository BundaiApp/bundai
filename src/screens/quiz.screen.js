import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { FONTS } from '../components/fonts'

//components
//import { VerticalSpacer } from '../components/spacers'
import { HeroTextBlock } from '../components/textBlock'

export const QuizScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topSection}>
        <View styles={styles.textBlockContainer}>
          <HeroTextBlock
            tx2={'Memorise'}
            tx2Color={'yellow'}
            tx3={'Spaced Repetition System'}
            tx3Color={'white'}
          />
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.boxRow}>
          <TouchableOpacity style={styles.box}>
            <Text style={{ ...FONTS.bold24 }}>SRS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigate('QuizSettings')}>
            <Text style={{ ...FONTS.bold24 }}>Instant Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  topSection: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30, // Rounded corners
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30, // Adjust padding to match the design
    paddingBottom: 30 // Adjust padding to ensure content is above the navigation
  },
  //boxRow
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
    width: '45%',
    height: 100,
    borderRadius: 10,
    marginRight: 15
  }
})
