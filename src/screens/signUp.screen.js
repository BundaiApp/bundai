import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { useMutation } from '@apollo/client'

//utils
import { FONTS } from '../components/fonts'
//graphQL
import SIGN_UP from '../mutations/signUp.mutation.js'

export default function SignUp({ navigation: { navigate, goBack } }) {
  const [password, setPassWord] = useState(null)
  const [email, setEmail] = useState(null)
  const [username, setUsername] = useState(null)

  //mutation
  const [signUp, { loading }] = useMutation(SIGN_UP)

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
        console.log(data)
      }
      if (data.signUp.errorMessage) {
        console.log(data.signUp.errorMessage)
      }
      if (data.errors) {
        console.log(data.signUp.errorMessage)
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
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        type
        secureTextEntry
        placeholder={'Password'}
        placeholderTextColor={'gray'}
        value={password}
        autoCapitalize={false}
        onChangeText={(text) => setPassWord(text)}
      />
      <TextInput
        style={styles.textInput}
        value={username}
        secureTextEntry={false}
        placeholder={'Name'}
        placeholderTextColor={'gray'}
        autoCapitalize={false}
        onChangeText={(text) => setUsername(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => pass()}>
        <Text style={styles.buttonText}>Lets Learn Japanese</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palegoldenrod',
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
