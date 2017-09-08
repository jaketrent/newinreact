import media from './media'
const now = _ => new Date().getFullYear()

const Dotted = _ => (
  <div className="dotted">
    <style jsx>{`
      .dotted {
        margin: 3px;
        height: 3px;
        background-image: linear-gradient(
          to right,
          black 25%,
          rgba(255, 255, 255, 0) 0%
        );
        background-position: top;
        background-size: 8px 2px;
        background-repeat: repeat-x;
      }
    `}</style>
  </div>
)

const Solid = _ => (
  <div className="solid">
    <style jsx>{`
      .solid {
        height: 1px;
        background: black;
      }
    `}</style>
  </div>
)

export default _ => (
  <div className="footer">
    <div className="copy">
      <p className="name">&copy; {now()} Jake Trent  &nbsp;</p>
      <a href="https://jaketrent.com" className="website">
        jaketrent.com
      </a>
    </div>
    <Dotted />
    <Solid />
    <style jsx>{`
      .footer {
        margin: 7em 0 2em 0;
      }
      .copy {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
      }
      .name {
        line-height: 0;
        margin: 0;
      }
      .website {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
