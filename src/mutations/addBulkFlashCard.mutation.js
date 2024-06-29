import { gql } from '@apollo/client'

export default gql`
  mutation AddBulkFlashCards($userId: String, $kanjis: [QuizObject]) {
    addBulkFlashCards(userId: $userId, kanjis: $kanjis) {
      userId
      kanjiName
    }
  }
`
