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
    `}</style>
  </div>
)
