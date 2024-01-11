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
import LOG_IN from '../mutations/logIn.mutation'
//utils
import AuthContext from '../contexts/authContext'

export default function Login() {
  const [password, setPassWord] = useState(null)
  const [email, setEmail] = useState(null)
  //mutation
  const [logIn, { loading, error }] = useMutation(LOG_IN)
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
    if (email == null || email == '') {
      showMessage({
        message: 'Please set email',
        type: 'danger'
      })
    } else if (password == null || password == '') {
      showMessage({
        message: 'Please set password',
        type: 'danger'
      })
    } else {
      const checkMail = validateEmail(email)
      if (!checkMail) {
        showMessage({
          message: 'Invalid Email',
          type: 'danger'
        })
        return
      }

      const { data } = await logIn({
        variables: {
          email,
          password
        }
      })

      if (data.logIn.errorMessage === null) {
        await AsyncStorage.multiSet([
          ['@token', data.logIn.token],
          ['@username', data.logIn.user.name],
          ['@userId', data.logIn.user._id],
          ['@email', data.logIn.user.email],
          ['@verified', 'false'],
          ['@passed', 'true']
        ])

        await setAuth({
          ...auth,
          token: data.logIn.token,
          userId: data.logIn.user._id,
          email: data.logIn.user.email,
          username: data.logIn.user.name,
          passed: true,
          verified: false
        })
      }

      if (data.logIn.errorMessage) {
        console.log(data)
        showMessage({
          message: `${data.logIn.errorMessage}`,
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
        autoCapitalize={'none'}
        secureTextEntry
        placeholder={'Password'}
        placeholderTextColor={'gray'}
        value={password}
        onChangeText={(text) => setPassWord(text)}
      />
      {loading ? (
        <View style={styles.button}>
          <ActivityIndicator size="small" color="green" />
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => pass()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
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
