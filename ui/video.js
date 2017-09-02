import React from 'react'
export default class extends React.Component {
  constructor() {
    super()

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
          <div className="video">
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
            width: 100%;
          }
          .video-cover {
            width: 100%;
          }
          .video {
            position: relative;
            height: 0;
            padding-bottom: 56.25%;
            overflow: hidden;
          }
          .frame {
            position: relative;
            top: 0;
            left: 0;
            height: auto;
            width: auto;
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
