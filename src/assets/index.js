const fs = require('fs')
const path = require('path')

// Define the directory containing your files
const directoryPath = './'

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  files.forEach((file) => {
    // Extract the file extension
    const ext = path.extname(file)

    // Remove numbers, underscores, and the file extension, then re-add the extension
    const newFileName = file.replace(/_\d+/, '').replace('_', '').replace(ext, '') + ext

    // Build the old and new file paths
    const oldFilePath = path.join(directoryPath, file)
    const newFilePath = path.join(directoryPath, newFileName)

    // Rename the file
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.log('Error renaming file: ' + err)
      } else {
        console.log(`Renamed: ${file} -> ${newFileName}`)
      }
    })
  })
})
