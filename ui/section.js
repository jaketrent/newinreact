import media from './media'

const Section = props => <div>{props.children}</div>

Section.Part = props => (
  <div className="section-part">
    {props.children}
    <style jsx>{`
      .section-part {
        margin: 2em auto;
        width: 100%;
      }
      @media screen and (${media.large}) {
        .section-part {
          flex: 1;
          margin: 0;
        }
        .section-part + .section-part {
          margin-left: 2em;
        }
      }
    `}</style>
  </div>
)

Section.Part2 = props => (
  <div className="section-part">
    <Section.Heading id={props.id}>{props.title}</Section.Heading>
    <div className="body">{props.children}</div>
    <style jsx>{`
      .section-part {
        margin: 2em auto;
        width: 100%;
      }
      .body {
        margin-top: 2em;
      }
      @media screen and (${media.large}) {
        .section-part {
          flex: 1;
          margin: 0;
        }
        .section-part + .section-part {
          margin-left: 2em;
        }
      }
    `}</style>
  </div>
)

Section.Heading = props => (
  <h2 className="heading">
    <a className={props.link} href={['#' + props.id]}>
      {props.children}
    </a>
    <style jsx>{`
      .heading {
        font-size: 1.5em;
        margin: 0 auto;
        width: 100%;
        max-width: 900px;
      }
      .link-red {
        position: relative;
        border-bottom: solid 3px #c91f06;
        border-radius: 50px 330px 525px 0px/25px 55px 25px 225px;
      }
      .link-green {
        position: relative;
        border-bottom: solid 3px #3bad24;
        border-radius: 50px 330px 325px 1px/225px 55px 25px 225px;
      }
      .link:hover:before {
        content: '\\1F517';
        position: absolute;
        left: -1.5em;
      }
      @media screen and (${media.large}) {
        .heading {
          margin-bottom: 1.5em;
          max-width: 1650px;
        }
      }
    `}</style>
  </h2>
)

Section.Content = props => (
  <section className="content" id={props.id}>
    {props.children}
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        max-width: 900px;
        margin: auto;
      }

      @media screen and (${media.large}) {
        .content {
          flex-direction: row;
          max-width: 1650px;
          margin: auto;
          algn-items: flex-start;
        }
      }
    `}</style>
  </section>
)

export default Section
