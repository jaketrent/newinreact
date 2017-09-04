export default _ => (
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    @font-face {
      font-family: 'TequilaSunset';
      src: url('../static/TequilaSunset-Regular.otf') format('opentype');
    }
    html,
    body {
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
      line-height: 30px;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      h1 {
        font-size: 20px;
      }
    }
    @media screen and (min-width: 1441px) {
      h1 {
        font-size: 22px;
      }
    }
  `}</style>
)
