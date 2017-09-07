export default props => (
  <div className="definition">
    <p className="body">{props.children}</p>
    <style jsx>{`
      p {
        margin: 0;
      }
      p + p {
        margin: 1.5em 0;
      }
    `}</style>
  </div>
)
