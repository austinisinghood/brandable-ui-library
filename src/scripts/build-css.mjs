import fs from 'fs'
import path from 'path'
import * as sass from 'sass'

// Define paths
const srcDir = path.resolve('src/styles/themes')
const distDir = path.resolve('dist/themes')

// Ensure the output directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// List of SCSS files (themes)
const themes = ['default/theme.scss', 'techfriendly/theme.scss'] // Add any additional themes here

themes.forEach((theme) => {
  const themeName = path.dirname(theme) // Get the directory name for theme
  const themeDistDir = path.join(distDir, themeName)

  // Ensure the theme directory exists
  if (!fs.existsSync(themeDistDir)) {
    fs.mkdirSync(themeDistDir, { recursive: true })
  }

  const result = sass.renderSync({
    file: path.join(srcDir, theme),
    outFile: path.join(themeDistDir, 'theme.css'),
    sourceMap: true,
  })

  // Write the compiled CSS to the output directory
  fs.writeFileSync(path.join(themeDistDir, 'theme.css'), result.css)
})
