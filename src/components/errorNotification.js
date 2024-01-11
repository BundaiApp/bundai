import React from 'react'

import { View } from 'react-native'
import { showMessage, hideMessage } from 'react-native-flash-message'

export default function ErrorNotification(type, title, description) {
  function openAlert() {
    showMessage({
      message: title,
      type: type == 'success' ? type : 'danger'
    })
  }
  return <View onPress={openAlert()} />
}
