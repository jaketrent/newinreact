export default props => (
  <div className="definition">
    <p className="body">{props.children}</p>
    <a href={props.link} className="link">
      <span>Official Doc</span> &#8594;
    </a>
    <style jsx>{`
      span {
        text-decoration: underline;
      }
      p {
        margin: 0;
      }
      p + p {
        margin: 1.5em 0;
      }
    `}</style>
  </div>
)
