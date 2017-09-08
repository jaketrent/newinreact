export default props => (
  <div className="container">
    <img src={props.img} className="picture" />
    <style jsx>{`
      .container {
        width: 100%;
        margin: auto;
        text-align: center;
      }
      .picture {
        height: 50%;
        width: 60%;
        margin: auto;
      }
    `}</style>
  </div>
)
