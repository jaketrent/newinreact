import Changes from '../ui/changes'
import Content from '../ui/content'
import Definition from '../ui/definition'
import Diff from '../ui/diff'
import Filler from '../ui/filler'
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
      <Section.Heading id="prop-types" link="link-red">
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

    <Filler />

    <Section>
      <Section.Heading id="create-class" link="link-red">
        React.createClass
      </Section.Heading>
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

    <Filler />

    <Section>
      <Section.Heading id="migration" link="link-red">
        React Codemod to Migrate
      </Section.Heading>
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

    <Filler />

    <Section>
      <Section.Heading id="return-arrays" link="link-green">
        Return Arrays
      </Section.Heading>
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

    <Filler />

    <Section>
      <Section.Heading id="return-strings" link="link-green">
        Return Strings
      </Section.Heading>
      <Section.Content>
        <Section.Part>
          <Definition>
            Returning strings is as straightforward as it seems, you can now
            return strings! You have the ability to return just a string with no
            HTML tags surrounding the string.
            <Link href="https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings">
              Official Docs
            </Link>
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

    <Filler />

    <Section>
      <Section.Heading id="component-error" link="link-green">
        Component Error Boundaries
      </Section.Heading>
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

    <Filler />

    <Section>
      <Section.Content>
        <Section.Part2 title="The Project" id="project">
          <Definition>
            Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam
            indoctum constituto, mel summo disputationi et. Ei homero graecis
            rationibus has, te idque ornatus suavitate qui. Eu vide malis oratio
            eam, illud modus interesset vix te, nibh assentior pri no. Has ex
            purto patrioque aliquando, in suscipit nominati est. Id alienum
            suscipiantur ius, est ipsum praesent suavitate ne.
            <Link href="https://github.com/jaketrent/stickerloot">Github</Link>
          </Definition>
        </Section.Part2>

        <Section.Part>
          <Image img="../static/pinata8bit.png" />
        </Section.Part>
      </Section.Content>
    </Section>

    <Subscribe />
    <Footer />
  </Content>
)
