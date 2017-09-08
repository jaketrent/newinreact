export default props => (
  <div className="definition">
    <div className="body">{props.children}</div>
    <style jsx>{`
      .body {
        margin: 0;
      }
      .body + .body {
        margin: 1.5em 0;
      }
    `}</style>
  </div>
)
