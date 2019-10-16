import { hack as theme } from 'mdx-deck/themes'
import prismStyle from 'react-syntax-highlighter/styles/prism/funky'

const fgColor = '#ffffff'

export default {
  ...theme,
  colors: {
    text: fgColor,
    background: '#000',
    link: fgColor,
    pre: '#000',
    preBackground: fgColor,
    code: '#000',
    codeBackground: fgColor,
  },
  prism: {
    style: prismStyle,
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
