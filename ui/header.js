export default _ => (
  <header className="header">
    <h1 className="title">
      <div className="word-wrap">
        <div className="nuevo">Nuevo</div>
        <div className="in">in</div>
        <div className="react">React</div>
      </div>
    </h1>

    <style jsx>{`
      .nuevo {
        font-size: 1.5em;
        border: solid 7px red;
        border-radius: 266px 25px 55px 45px/25px 225px 95px 225px;
        background: red;
      }
      .react {
        font-size: 1.5em;
        border: solid 7px #32cd32;
        border-radius: 10px 45px 525px 25px/25px 225px 25px 225px;
        background: #32cd32;
      }
      .in {
      }
      .title {
        border-style: dotted none;
        border-width: 3px;
        margin: 8px;
        padding: 5px none;
        position: relative;
      }
      .header {
        border-style: solid none;
        border-width: 1 px;
      }
      .word-wrap {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </header>
)
