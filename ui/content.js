export default props => (
  <div className="content">
    {props.children}
    <style jsx>{`
      .content {
        text-align: center;
        margin: auto;
      }
    `}</style>
  </div>
)
