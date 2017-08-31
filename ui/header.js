export default props => (
  <div className="header">
    {props.children}

    <style jsx>{`
      .header {
        margin: 20px 0;
      }
    `}</style>
  </div>
)
