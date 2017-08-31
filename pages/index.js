import BottomBorder from '../ui/bottom-border'
import GlobalStyles from '../ui/global-styles'
import Head from '../ui/head'
import Header from '../ui/header'
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
  </div>
)
