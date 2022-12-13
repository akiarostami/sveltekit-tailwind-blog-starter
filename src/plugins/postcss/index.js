import autoprefixer from 'autoprefixer'
import nesting from 'postcss-nesting'
import customMedia from 'postcss-custom-media'

export default [
  autoprefixer,
  nesting,
  customMedia({
    importFrom: [
      // this is relative to svelte.config.js
      './src/styles/sizes.css'
    ]
  })
]