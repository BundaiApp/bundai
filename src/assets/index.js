const fs = require('fs')
const path = require('path')

// Read the JSON file
const inputFilePath = path.join(__dirname, './nouns_only_words.json')
const outputFilePath = path.join(__dirname, 'itemsObject.json')

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err)
    return
  }

  // Parse the JSON data (which is an array)
  const itemsArray = JSON.parse(data)

  // Convert the array to an object
  const itemsObject = itemsArray.reduce((obj, item) => {
    obj[item] = `require("../assets/${item}.png")`
    return obj
  }, {})

  // Convert the object to a JSON string
  const outputJson = JSON.stringify(itemsObject, null, 2)

  // Save the result to a new JSON file
  fs.writeFile(outputFilePath, outputJson, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err)
      return
    }
    console.log('File successfully written to', outputFilePath)
  })
})
