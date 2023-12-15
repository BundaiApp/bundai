import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
//utils
import { FONTS } from '../components/fonts'

export default function Landing({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.heroText}>文台</Text>
        <Text style={styles.heroText}>Bundai</Text>
        <Text style={styles.subtitleText}>Your Japanese Language helper</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigate('SignUp')}>
          <Text style={styles.buttonText}>Lets Learn Japanese</Text>
        </TouchableOpacity>
        <View style={styles.spacerH} />
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={[styles.subtitleText, { textDecorationLine: 'underline' }]}>
            already have an account ? Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palegoldenrod',
    alignItems: 'center',
    paddingTop: '20%'
  },
  topContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
    backgroundColor: 'thistle',
    borderRadius: 10
  },
  buttonText: {
    ...FONTS.bold21
  },
  heroText: {
    ...FONTS.bold46,
    marginBottom: '2%'
  },
  subtitleText: {
    ...FONTS.regular16,
    textAlign: 'center',
    paddingHorizontal: '5%',
    marginBottom: '2%'
  },
  spacerH: {
    height: '2%'
  }
})
