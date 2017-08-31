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
    }
    h1,
    h2,
    h3 {
      font-family: TequilaSunset;
    }
    a {
      text-decoration: none;
      cursor: pointer;
    }
    p {
      line-height: 30px;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      html,
      body {
        font-size: 22px;
      }
    }
    @media screen and (min-width: 1441px) {
      html,
      body {
        font-size: 24px;
      }
    }
  `}</style>
)
