import media from './media'

export default _ => (
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    @font-face {
      font-family: 'TequilaSunset';
      src: url('../static/TequilaSunset-Regular.otf') format('opentype');
    }
    html {
      font-size: 16px;
      font-family: sans-serif;
    }
    h1,
    h2,
    h3 {
      font-family: TequilaSunset;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      color: black;
    }
    p {
      line-height: 1.5em;
    }
    @media screen and (${media.medium}) {
      html {
        font-size: 18px;
      }
    }
    @media screen and (${media.large}) {
      html {
        font-size: 20px;
      }
    }
  `}</style>
)
