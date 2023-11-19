export const SrsFunction = () => {
  const sqlite3 = require('sqlite3').verbose()
  const db = new sqlite3.Database('./srs.db')

  // Step 1: Setup the database
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS flashcards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kanjiName TEXT,
    hiragana TEXT,
    meanings TEXT,
    firstSeen DATE,
    lastSeen DATE,
    rating INTEGER,
    nextReview DATE
  )`)
  })

  // Function to add flashcards to the database
  function addFlashcard(flashcard) {
    const { kanjiName, hiragana, meanings } = flashcard
    const firstSeen = new Date().toISOString()

    db.run(
      `INSERT INTO flashcards (kanjiName, hiragana, meanings, firstSeen, nextReview)
          VALUES (?, ?, ?, ?, ?)`,
      [kanjiName, hiragana, JSON.stringify(meanings), firstSeen, firstSeen],
      function (err) {
        if (err) {
          return console.error(err.message)
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`)
      }
    )
  }

  // Step 2: Import data from JSON
  const flashcards = require('./jlptAll.json') // Assuming this is your JSON file path
  flashcards.forEach(addFlashcard)

  // Step 3: Define the scheduling logic
  function calculateNextReview(rating) {
    // Basic example: If the rating is 4 (good), then schedule 4 days later, etc.
    const today = new Date()
    return new Date(today.setDate(today.getDate() + rating))
  }

  // Step 4: Update records after review
  function updateReview(kanjiName, newRating) {
    const lastSeen = new Date().toISOString()
    const nextReview = calculateNextReview(newRating).toISOString()

    db.run(
      `UPDATE flashcards SET lastSeen = ?, rating = ?, nextReview = ?
          WHERE kanjiName = ?`,
      [lastSeen, newRating, nextReview, kanjiName],
      function (err) {
        if (err) {
          return console.error(err.message)
        }
        console.log(`Row(s) updated: ${this.changes}`)
      }
    )
  }

  // Example usage: Reviewing a flashcard
  // Let's say you reviewed the flashcard "見る" and rated it as 3 (good)
  updateReview('見る', 3)

  // Don't forget to close the database after all operations are done
  db.close()
}
