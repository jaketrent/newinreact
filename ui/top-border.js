export default _ => (
  <div className="top">
    <hr className="break" />

    <style jsx>{`
      .top {
        border-bottom: dotted 2px black;
        z-index: 10;
        position: relative;
        margin: 0 -10px -21px -10px;
      }
      .break {
        margin: 2px;
        color: black;
        border: solid 1px black;
      }
      @media screen and (min-width: 769px) {
        .top {
          margin: 0 -10px -30px -10px;
        }
      }
    `}</style>
  </div>
)
