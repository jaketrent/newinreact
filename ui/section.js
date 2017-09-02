export default props => (
  <section className="section">
    {props.children}
    <style jsx>{`
      .section {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
      }
      @media screen and (min-width: 769px) {
        .section {
          flex-direction: row;
        }
      }
    `}</style>
  </section>
)
