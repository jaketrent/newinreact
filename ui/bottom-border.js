export default _ => (
  <div className="bottom">
    <hr className="break" />

    <style jsx>{`
      .bottom {
        border-top: dotted 2px black;
        z-index: 10;
        position: relative;
        margin: -13px -10px 0 -10px;
      }
      .break {
        margin: 2px;
        color: black;
        border: solid 1px black;
      }
    `}</style>
  </div>
)
