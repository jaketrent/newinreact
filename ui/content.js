export default props => (
  <div className="content">
    {props.children}
    <style jsx>{`
      .content {
        padding: 0 1em;
      }
    `}</style>
  </div>
)
