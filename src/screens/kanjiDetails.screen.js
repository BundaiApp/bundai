import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SQLite from 'react-native-sqlite-2'

const Pill = ({ subject }) => (
  <View style={styles.pill}>
    <Text style={styles.subtitleText}>{subject}</Text>
  </View>
)

export default function KanjiDetail({ route }) {
  const { isWord, isKana } = route.params
  const { kanjiName, meanings, kun, on, hiragana, quizAnswers } = route.params.paramsData

  const [db, setDb] = useState(null)

  // Initialize the database
  useEffect(() => {
    const database = SQLite.openDatabase('srs.db', '1.0', '', 1)
    setDb(database)
    database.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS flashcards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        kanjiName TEXT UNIQUE,
        hiragana TEXT,
        meanings TEXT,
        firstSeen DATE,
        lastSeen DATE,
        rating INTEGER,
        nextReview DATE,
        quizAnswers TEXT
      )`)

      tx.executeSql('SELECT * FROM `flashcards`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i))
        }
      })
    })

    //return () => database.close()
  }, [])

  // Function to check if Kanji exists and insert if not
  useEffect(() => {
    if (db && kanjiName) {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM flashcards WHERE kanjiName = ?`,
          [kanjiName],
          (_, { rows }) => {
            if (rows.length === 0) {
              addFlashcard({ kanjiName, meanings, hiragana, on, kun, quizAnswers })
            }
          }
        )
      })
    }
  }, [db, kanjiName])

  //function to calculate next review date
  function calculateNextReview(rating, lastSeen) {
    const reviewIntervals = { 1: 1, 2: 2, 3: 4, 4: 7 } // Days until next review
    const today = lastSeen ? new Date(lastSeen) : new Date()
    return new Date(today.setDate(today.getDate() + (reviewIntervals[rating] || 1)))
  }

  // Function to add flashcards to the database
  const addFlashcard = (flashcard) => {
    if (!db) return

    const { kanjiName, meanings, on } = flashcard
    const initialRating = 1 // Default initial rating
    const nextReview = calculateNextReview(initialRating).toISOString()
    const firstSeen = new Date().toISOString()

    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO flashcards (kanjiName, hiragana, meanings, firstSeen, nextReview, lastSeen, rating, quizAnswers)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          kanjiName,
          JSON.stringify(on),
          JSON.stringify(meanings),
          firstSeen,
          nextReview,
          firstSeen,
          initialRating,
          JSON.stringify(quizAnswers)
        ],
        (_, { insertId }) => console.log(`A row has been inserted with rowid ${insertId}`),
        (tx, error) => console.error(error.message)
      )
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kanji}>{kanjiName}</Text>

      <Text style={styles.header}>Meanings</Text>
      <View style={styles.pillHolder}>
        {typeof meanings != 'string' ? (
          meanings.map((item, index) => <Pill key={item} index={index} subject={item} />)
        ) : (
          <Pill subject={meanings} />
        )}
      </View>

      {isKana ? null : isWord ? (
        <>
          <Text style={styles.header}>hiragana</Text>
          <View style={styles.pillHolder}>
            <Pill subject={hiragana} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.header}> Kunyomi Readings</Text>
          <View style={styles.pillHolder}>
            {on.map((item, index) => (
              <Pill key={item} index={index} subject={item} />
            ))}
          </View>

          <Text style={styles.header}>Onyomi Readings</Text>
          <View style={styles.pillHolder}>
            {kun.map((item, index) => (
              <Pill key={item} index={index} subject={item} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '2%',
    backgroundColor: 'ivory'
  },
  kanji: {
    fontWeight: '600',
    fontSize: 100,
    alignSelf: 'center'
  },
  header: {
    fontWeight: '400',
    fontSize: 30,
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'wheat',
    paddingLeft: '5%'
  },
  pillHolder: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    paddingVertical: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  pill: {
    backgroundColor: 'thistle',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    paddingHorizontal: '4%',
    marginRight: '2%',
    marginBottom: '2%'
  },
  subtitleText: {
    fontWeight: '400',
    fontSize: 22,
    fontFamily: 'menlo'
  }
})
