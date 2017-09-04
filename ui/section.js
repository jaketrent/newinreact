export default props => (
  <section className="section">
    {props.children}
    <style jsx>{`
      .section {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
      }
      @media screen and (min-width: 900px) {
        .section {
          flex-direction: row;
          max-width: 1650px;
          margin: auto;
          algn-items: flex-start;
        }
      }
    `}</style>
  </section>
)
