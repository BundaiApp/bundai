import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

//utils
import { FONTS } from '../components/fonts'
//graphQL
import SIGN_UP from '../mutations/signUp.mutation.js'
//utils
import AuthContext from '../contexts/authContext'

export default function SignUp({ navigation: { navigate, goBack } }) {
  const [password, setPassWord] = useState(null)
  const [email, setEmail] = useState(null)
  const [username, setUsername] = useState(null)
  //mutation
  const [signUp, { loading, error }] = useMutation(SIGN_UP)
  //context
  const { auth, setAuth } = useContext(AuthContext)

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  async function pass() {
    if (username == null || username == '') {
      ErrorNoti('error', 'Please set username')
    } else if (email == null || email == '') {
      ErrorNoti('error', 'Please set email')
    } else if (password == null || password == '') {
      ErrorNoti('error', 'Please set password')
    } else {
      const checkMail = validateEmail(email)
      if (!checkMail) {
        ErrorNoti('error', 'Invalid email')
        return
      }
      const { data } = await signUp({
        variables: {
          email,
          password,
          username
        }
      })

      if (data.signUp.errorMessage === null) {
        await AsyncStorage.multiSet([
          ['@userId', data.signUp.user._id],
          ['@token', data.signUp.token],
          ['@username', data.signUp.user.name],
          ['@verified', 'false'],
          ['@passed', 'true'],
          ['@email', data.signUp.user.email]
        ])

        await setAuth({
          ...auth,
          token: data.signUp.token,
          userId: data.signUp.user._id,
          email: data.signUp.user.email,
          username,
          passed: true,
          verified: false
        })
      }

      if (data.signUp.errorMessage) {
        console.log(data.signUp.errorMessage)
      }

      if (data.errors) {
        console.log(data.errors[0].message)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bigSpacer} />
      <TextInput
        style={styles.textInput}
        value={email}
        placeholder={'x@example.com'}
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry
        placeholder={'Password'}
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        value={password}
        onChangeText={(text) => setPassWord(text)}
      />
      <TextInput
        style={styles.textInput}
        value={username}
        secureTextEntry={false}
        placeholder={'Name'}
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => pass()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center'
  },
  bigSpacer: {
    height: '20%'
  },
  spacer: {
    height: '2%'
  },
  textInput: {
    width: wp('80%'),
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    color: 'gray',
    ...FONTS.regular14,
    paddingBottom: hp('1%'),
    height: hp('7%')
  },
  button: {
    marginTop: '20%',
    height: hp('7%'),
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: wp('8%'),
    backgroundColor: 'thistle'
  },
  buttonText: {
    ...FONTS.bold21
  }
})
