import React, { useState, useContext } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
//utils
import { FONTS } from '../components/fonts'
//graphQL
import SIGN_UP from '../mutations/signUp.mutation.js'
//utils
import AuthContext from '../contexts/authContext'

export default function SignUp() {
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
      showMessage({
        message: 'Please set username',
        type: 'danger'
      })
    } else if (email == null || email == '') {
      showMessage({
        message: 'Please provide a valid email address',
        type: 'danger'
      })
    } else if (password == null || password == '') {
      showMessage({
        message: 'Please set a password',
        type: 'danger'
      })
    } else {
      const checkMail = validateEmail(email)
      if (!checkMail) {
        showMessage({
          message: 'Invalid email',
          type: 'danger'
        })
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
        showMessage({
          message: `${data.signUp.errorMessage}`,
          type: 'danger'
        })
      }
      if (data.errors) {
        showMessage({
          message: `${data.errors[0].message}`,
          type: 'danger'
        })
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
        placeholder={'Username'}
        placeholderTextColor={'gray'}
        autoCapitalize={'none'}
        onChangeText={(text) => setUsername(text)}
      />
      {loading ? (
        <View style={styles.button}>
          <ActivityIndicator size="small" color="green" />
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => pass()}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
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
