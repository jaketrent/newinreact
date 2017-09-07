import media from './media'

export default _ => (
  <form
    action="//jaketrent.us16.list-manage.com/subscribe/post?u=a807b6fd3aee3dfcaba6c44c2&amp;id=b958d44038"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="mail"
    target="_blank"
    noValidate
  >
    <h2 className="title">Get new courses</h2>
    <label htmlFor="mce-EMAIL" className="mail__label">
      Receive news about new courses I release!
    </label>
    <input
      type="email"
      defaultValue=""
      name="EMAIL"
      className="mail__input"
      id="mce-EMAIL"
      placeholder="email address"
      required
    />
    <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
      <input
        type="text"
        name="b_a807b6fd3aee3dfcaba6c44c2_b958d44038"
        tabIndex="-1"
        defaultValue=""
      />
    </div>
    <div className="clear">
      <button
        name="subscribe"
        id="mc-embedded-subscribe"
        className="mail__button"
      >
        Subscribe
      </button>
    </div>
    <style jsx>{`
      .title {
        display: flex;
        align-items: center;
        font-size: 1.4em;
        text-transform: uppercase;
        margin: 2em auto 0.5em auto;
      }
      .mail {
        display: flex;
        flex-direction: column;
        max-width: 600px;
      }
      .mail__label {
      }
      .mail__input {
        padding: 0.125em 0.5em;
        border: solid 2px black;
        border-radius: 3px;
        height: 2em;
        line-height: 2em;
        font-size: 1.25em;
        margin: 0.5em 0;
      }
      .mail__button {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        width: 100%;
        background: linear-gradient(180deg, hsl(7, 94%, 40%), hsl(8, 94%, 30%));
        border-radius: 3px;
        margin: 0 auto;
        text-align: center;
        border: none;
        font-size: 1.25em;
        color: #fff;
        font-family: 'Raleway', sans-serif;
        text-shadow: 1px 1px 0 black;
        cursor: pointer;
        box-shadow: 1px 1px 1px black;
      }
      .mail__button:hover {
        background: linear-gradient(
          180deg,
          hsl(10, 94%, 55%),
          hsl(7, 94%, 38%)
        );
        color: #f5f5f5;
        border: none;
        position: relative;
        top: -1px;
        box-shadow: 2px 2px 3px black;
      }
      @media screen and (min-width: 648px) {
        .mail {
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          max-width: 36em;
          margin: 0 auto;
        }
        .mail__label {
          min-width: 100%;
        }
        .mail__input {
          flex: 1;
          margin-right: 0.5em;
        }
        .mail__button {
          padding: 0 2em;
        }
      }
    `}</style>
  </form>
)
