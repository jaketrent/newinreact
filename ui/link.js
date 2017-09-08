export default props => (
  <div className="link-container">
    <a href={props.href} className="link">
      <span>{props.children}</span> &#8594;
    </a>
    <style jsx>{`
      span {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
