export default props => (
  <div className="container">
    <img src={props.img} className="picture" />
    <style jsx>{`
      .container {
        width: 100%;
      }
      .picture {
        height: 50%;
        width: 100%;
      }
    `}</style>
  </div>
)
