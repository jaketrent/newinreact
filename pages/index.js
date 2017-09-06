import BottomBorder from '../ui/bottom-border'
import Changes from '../ui/changes'
import Definition from '../ui/definition'
import Diff from '../ui/diff'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
import Section from '../ui/section'
import SectionPart from '../ui/section-part'
import Tag from '../ui/tag'
import Title from '../ui/title'
import TopBorder from '../ui/top-border'
import Video from '../ui/video'

export default _ => (
  <div>
    <Head />
    <GlobalStyles />
    <Header>
      <TopBorder />
      <Title />
      <BottomBorder />
    </Header>
    <Tag />
    <Changes />

    <Section id="first">
      <SectionPart>
        <Definition heading="Something" link="jaketrent.com">
          Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
          indoctum constituto, mel summo disputationi et. Ei homero graecis
          rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
          eam, illud modus interesset vix te, nibh assentior pri no. Has ex
          purto patrioque aliquando, in suscipit nominati est. Id alienum
          suscipiantur ius, est ipsum praesent suavitate ne.
        </Definition>
      </SectionPart>
      <SectionPart>
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
      </SectionPart>
      <SectionPart>
        <Video
          img="https://lorempixel.com/500/250/cats"
          video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
        />
      </SectionPart>
    </Section>

    <Section id="second">
      <SectionPart>
        <Definition heading="Else" link="jaketrent.com">
          Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
          indoctum constituto, mel summo disputationi et. Ei homero graecis
          rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
          eam, illud modus interesset vix te, nibh assentior pri no. Has ex
          purto patrioque aliquando, in suscipit nominati est. Id alienum
          suscipiantur ius, est ipsum praesent suavitate ne.
        </Definition>
      </SectionPart>
      <SectionPart>
        <Definition heading="Else" link="jaketrent.com">
          Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
          indoctum constituto, mel summo disputationi et. Ei homero graecis
          rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
          eam, illud modus interesset vix te, nibh assentior pri no. Has ex
          purto patrioque aliquando, in suscipit nominati est. Id alienum
          suscipiantur ius, est ipsum praesent suavitate ne.
        </Definition>
      </SectionPart>
      <SectionPart>
        <Video
          img="https://lorempixel.com/500/250/cats"
          video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
        />
      </SectionPart>
    </Section>
  </div>
)
