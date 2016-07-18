import Typography from 'typography'

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  headerFontFamily: '\'Open Sans\', Helvetica, Arial, sans-serif',
  headerGray: 40,
  bodyGray: 0,
  bodyFontFamily: '\'Open Sans\', Helvetica, Arial, sans-serif',
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 600,
  modularScales: [
    {
      scale: 'minor third',
    },
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
