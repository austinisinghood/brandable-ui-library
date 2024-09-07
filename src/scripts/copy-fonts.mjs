import fs from 'fs'
import path from 'path'

// Define paths
const srcFontDir = path.resolve('src/styles/fonts')
const distFontDir = path.resolve('dist/fonts')

// Ensure the output directory exists
if (!fs.existsSync(distFontDir)) {
  fs.mkdirSync(distFontDir, { recursive: true })
}

// Copy files recursively
function copyRecursiveSync(src, dest) {
  if (fs.lstatSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest)
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName))
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}

fs.readdirSync(srcFontDir).forEach((file) => {
  const srcFile = path.join(srcFontDir, file)
  const distFile = path.join(distFontDir, file)

  copyRecursiveSync(srcFile, distFile)
})
