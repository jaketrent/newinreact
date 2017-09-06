export default _ => (
  <div className="tag">
    <h3>
      <span className="v">v</span>.<span className="version">16</span>. the
      latest <span className="change">changes</span> and{' '}
      <span className="add">additions</span>
    </h3>
    <style jsx>{`
      .tag {
        text-align: center;
        font-size: 1.75em;
        line-height: 1.5em;
        margin: 2em 0 2.5em 0;
      }
      .v {
        font-size: 0.675em;
      }
      .version {
        font-size: 1.25em;
      }
      .change {
        border-bottom: solid 3px #c91f06;
        border-radius: 50px 330px 525px 0px/25px 55px 25px 225px;
      }
      .add {
        border-bottom: solid 3px #3bad24;
        border-radius: 50px 330px 325px 1px/225px 55px 25px 225px;
      }
    `}</style>
  </div>
)
