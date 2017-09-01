export default _ => (
  <div className="tag">
    <h2 className="tagline">
      v.16. the latest <span className="change">change</span> and{' '}
      <span className="add">additions</span>
    </h2>
    <style jsx>{`
      .tag {
        text-align: center;
        font-size: 0.9em;
        margin: 5em 0 4em 0;
      }
      .change {
        border-bottom: solid 2px #c91f06;
        border-radius: 50px 330px 525px 0px/25px 55px 25px 225px;
      }
      .add {
        border-bottom: solid 2px #3bad24;
        border-radius: 50px 330px 325px 1px/225px 55px 25px 225px;
      }
    `}</style>
  </div>
)
