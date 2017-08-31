export default _ => (
  <header className="header">
    <h1 className="title">
      <span className="nuevo">Nuevo</span> <span className="in">in</span>{' '}
      <span className="react">React</span>
    </h1>

    <style jsx>{`
      .nuevo {
        font-size: 3em;
        background: red;
      }
      .react {
        font-size: 3em;
        background: #32cd32;
      }
      .in {
      }
      .title {
        border-style: dotted none;
        border-width: 5px;
        margin: 8px;
        padding: 5px none;
      }
      .header {
        border-style: solid none;
        border-width: 3 px;
      }
    `}</style>
  </header>
)
