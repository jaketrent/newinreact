export default props => (
  <div className="definition">
    <h3 className="heading">{props.heading}</h3>
    <p className="body">{props.children}</p>
    <a href={props.link} className="link">
      <span>Official Doc</span> &#8594;
    </a>
    <style jsx>{`
      .heading {
        font-size: 1em;
      }
      span {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
