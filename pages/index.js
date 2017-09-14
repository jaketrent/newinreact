import Changes from '../ui/changes'
import Content from '../ui/content'
import Definition from '../ui/definition'
import Diff from '../ui/diff'
import Footer from '../ui/footer'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Image from '../ui/image'
import Link from '../ui/link'
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
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est. Id alienum
            suscipiantur ius, est ipsum praesent suavitate ne.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/prop-types.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">React.createClass</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/createclass.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">React Codemod to Migrate</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/migration.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">Return Arrays</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/return-arrays.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">Return Strings</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/return-strings.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">Widget Error Boundaries</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/widget-error.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">Route Error Boundaries</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/route-error.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Heading id="first">Server-Side Streaming</Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est.
            <Link href="https:/jaketrent.com">Official Docs</Link>
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
            img="../static/server-streaming.png"
            video="https://www.youtube.com/embed/b6VyUAwslZM?rel=0"
          />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Content>
        <Section.Part2 title="The Project">
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est. Id alienum
            suscipiantur ius, est ipsum praesent suavitate ne.
            <Link>Github</Link>
            <Link>Demo</Link>
          </Definition>
        </Section.Part2>

        <Section.Part>
          <Image img="../static/pinata8bit.png" />
        </Section.Part>
      </Section.Content>
    </Section>

    <Section>
      <Section.Content>
        <Section.Part>
          <Image img="../static/pinata8bit.png" />
        </Section.Part>
        <Section.Part2 title="Remembering The Author">
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est. Id alienum
            suscipiantur ius, est ipsum praesent suavitate ne.
            <Link>Github</Link>
            <Link>Demo</Link>
          </Definition>
        </Section.Part2>
      </Section.Content>
    </Section>
    <Subscribe />
    <Footer />
  </Content>
)
