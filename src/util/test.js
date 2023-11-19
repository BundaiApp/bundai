import React, { useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-2'

export const SrsFunction = () => {
  const [db, setDb] = useState(null)

  // Example Kanji data in state (This would be set based on your application's flow)
  const [kanjiData] = useState({
    kanjiName: '人',
    hiragana: 'ひと',
    meanings: ['person'],
    quizAnswers: ['old', 'mountain', 'person', 'cat']
  })

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
        nextReview DATE
      )`)
    })

    return () => {
      database.close()
    }
  }, [])

  // Function to check if Kanji exists and insert if not
  useEffect(() => {
    if (db && kanjiData) {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM flashcards WHERE kanjiName = ?`,
          [kanjiData.kanjiName],
          (_, { rows }) => {
            if (rows.length === 0) {
              addFlashcard(kanjiData)
            }
          }
        )
      })
    }
  }, [db, kanjiData])

  //function to calculate next review date
  function calculateNextReview(rating, lastSeen) {
    const reviewIntervals = { 1: 1, 2: 2, 3: 4, 4: 7 } // Days until next review
    const today = lastSeen ? new Date(lastSeen) : new Date()
    return new Date(today.setDate(today.getDate() + (reviewIntervals[rating] || 1)))
  }

  // Function to add flashcards to the database
  const addFlashcard = (flashcard) => {
    if (!db) return

    const { kanjiName, hiragana, meanings } = flashcard
    const initialRating = 1 // Default initial rating
    const nextReview = calculateNextReview(initialRating).toISOString()
    const firstSeen = new Date().toISOString()

    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO flashcards (kanjiName, hiragana, meanings, firstSeen, nextReview, lastSeen, rating)
         VALUES (?, ?, ?, ?, ?)`,
        [
          kanjiName,
          hiragana,
          JSON.stringify(meanings),
          firstSeen,
          nextReview,
          firstSeen,
          initialRating
        ],
        (_, { insertId }) => console.log(`A row has been inserted with rowid ${insertId}`),
        (tx, error) => console.error(error.message)
      )
    })
  }

  // The rest of your component rendering goes here...

  return (
    // Render your component UI here
    <div>{/* UI elements */}</div>
  )
}
