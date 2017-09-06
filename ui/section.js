const Section = props => (
  <div>
    {props.children}
    <style jsx>{`
      .section {
        margin: 20px 0;
      }
    `}</style>
  </div>
)

Section.Part = props => (
  <div className="section-part">
    {props.children}
    <style jsx>{`
      .section-part {
        margin: 0 auto;
        width: 100%;
      }
      @media screen and (min-width: 1024px) {
        .section-part {
          flex: 1;
        }
        .section-part + .section-part {
          margin-left: 2em;
        }
      }
    `}</style>
  </div>
)

Section.Heading = props => (
  <h3 className="heading">
    <a className="link" href={['#' + props.id]}>
      {props.children}
    </a>
    <style jsx>{`
      .heading {
        font-size: 1.3em;
        margin: 0 auto;
        width: 100%;
      }
      .link {
        position: relative;
      }
      .link:hover:before {
        content: '\\1F517';
        position: absolute;
        left: -1.5em;
      }
      @media screen and (min-width: 1024px) {
        .heading {
          max-width: 100%;
        }
      }
    `}</style>
  </h3>
)

Section.Content = props => (
  <section className="content" id={props.id}>
    {props.children}
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
      }
      @media screen and (min-width: 1024px) {
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
