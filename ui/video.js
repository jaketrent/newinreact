import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVideoCover: true
    }
  }
  render() {
    return (
      <div className="video-container">
        {this.state.isVideoCover ? (
          <img
            src={this.props.img}
            className="video-cover"
            onClick={this._handleClick.bind(this)}
          />
        ) : (
          <div className="container">
            <iframe
              className="frame"
              width="560"
              height="315"
              src={this.props.video}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
        <style jsx>{`
          .video-container {
            text-align: center;
            margin: auto;
          }
          .video-cover {
            width: 100%;
            max-width: 498px;
            align-self: center;
          }
          .container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
          }
          .frame {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
  _handleClick() {
    this.setState({
      isVideoCover: !this.state.isVideoCover
    })
  }
}
