import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import SQLite from 'react-native-sqlite-2'

export default function Exam({ navigation: { navigate } }) {
  useEffect(() => {
    const db = SQLite.openDatabase('test.db', '1.0', '', 1)
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS Users', [])
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))',
        []
      )
      txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora'])
      txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya'])
      txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i))
        }
      })
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exam</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  }
})
