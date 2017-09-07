import Changes from '../ui/changes'
import Content from '../ui/content'
import Definition from '../ui/definition'
import Diff from '../ui/diff'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Section from '../ui/section'
import Subscribe from '../ui/subscribe'
import Tag from '../ui/tag'
import Title from '../ui/title'
import Video from '../ui/video'

export default _ => (
  <Content>
    <Head />
    <GlobalStyles />
    <Title />
    <Tag />
    <Changes />

    <Section>
      <Section.Heading id="first">
        Prop Types Moved to Separate Package
      </Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition link="jaketrent.com">
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est. Id alienum
            suscipiantur ius, est ipsum praesent suavitate ne.
          </Definition>
        </Section.Part>
        <Section.Part>
          <Diff
            raw={`
 export default props => (
-  <section className="section">
+  <section className="section" id={props.id}>
+    <span className="link">
+      <a href={['#' + props.id]}>&#128279;</a>
+    </span>
     {props.children}
`}
          />
        </Section.Part>
        <Section.Part>
          <Video
            img="../static/test.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>
    <Subscribe />
  </Content>
)
