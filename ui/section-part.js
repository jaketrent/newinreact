export default props => (
  <div className="section-part">
    {props.children}
    <style jsx>{`
      .section-part {
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
      }
      @media screen and (min-width: 900px) {
        .section-part {
          width: 30%;
        }
      }
    `}</style>
  </div>
)
