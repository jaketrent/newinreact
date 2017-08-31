import BottomBorder from '../ui/bottom-border'
import Definition from '../ui/definition'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
import Section from '../ui/section'
import Tag from '../ui/tag'
import Title from '../ui/title'
import TopBorder from '../ui/top-border'

export default _ => (
  <div>
    <Head />
    <GlobalStyles />
    <Header>
      <TopBorder />
      <Title />
      <BottomBorder />
    </Header>

    <Section>
      <Definition heading="Something" link="jaketrent.com">
        Lorem ipsum dolor sit amet, sit case soleat ea, no mei aperiam indoctum
        constituto, mel summo disputationi et. Ei homero graecis rationibus has,
        te idque ornatus suavitate qui. Eu vide malis oratio eam, illud modus
        interesset vix te, nibh assentior pri no. Has ex purto patrioque
        aliquando, in suscipit nominati est. Id alienum suscipiantur ius, est
        ipsum praesent suavitate ne.
      </Definition>
    </Section>
  </div>
)
