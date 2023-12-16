import { gql } from '@apollo/client'

export default gql`
  query GetPendingFlashcards($userId: String!) {
    getPendingFlashCards(userId: $userId) {
      _id
      kanjiName
      hiragana
      meanings
      quizAnswers
      firstSeen
      lastSeen
      nextReview
      rating
    }
  }
`
