export default props => (
  <section className="section" id={props.id}>
    <span className="link">
      <a href={['#' + props.id]}>&#128279;</a>
    </span>
    {props.children}
    <style jsx>{`
      .section {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
      }
      .link {
        visibility: hidden;
        width: 1.2em;
        margin-top: 1.2em;
      }
      @media screen and (min-width: 900px) {
        .section {
          flex-direction: row;
          max-width: 1650px;
          margin: auto;
          algn-items: flex-start;
        }
        .section:hover > .link {
          visibility: visible;
        }
      }
    `}</style>
  </section>
)
