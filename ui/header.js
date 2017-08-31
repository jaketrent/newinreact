export default props => (
  <div className="header">
    {props.children}

    <style jsx>{`
      .header {
        margin: 20px 0;
      }
      @media screen and (min-width: 769px) {
        .header {
          margin: 50px 0;
        }
      }
    `}</style>
  </div>
)
